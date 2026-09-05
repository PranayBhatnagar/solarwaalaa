/**
 * Shared form validation (spec section 14, Lead Generation & Form UX):
 * "phone must support Indian numbers; do not reject valid formats
 * unnecessarily."
 */

// Accepts optional +91 / 91 / 0 prefix followed by a 10-digit number
// starting 6-9 (standard Indian mobile numbering), with optional spaces/hyphens.
const INDIAN_PHONE_RE = /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/;

export function isValidIndianPhone(value: string): boolean {
  const digitsAndPlus = value.replace(/[\s-]/g, "");
  return INDIAN_PHONE_RE.test(digitsAndPlus);
}

export function isValidEmail(value: string): boolean {
  // Deliberately permissive — good-enough client-side check, not a full RFC validator.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export type LeadFormFields = "name" | "phone" | "email" | "city" | "propertyType" | "consent";

export type LeadFormValues = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  propertyType: string;
  monthlyBill?: string;
  message?: string;
  consent: boolean;
};

/**
 * Validates the short lead form (spec 5.13/14): Name, Phone, City, Property
 * Type are required; Email, Monthly Bill, Message are optional; consent
 * must be checked.
 */
export function validateLeadForm(values: LeadFormValues): FieldErrors<LeadFormFields> {
  const errors: FieldErrors<LeadFormFields> = {};

  if (!isNonEmpty(values.name)) errors.name = "Please enter your name.";
  if (!isNonEmpty(values.phone)) {
    errors.phone = "Please enter a phone number.";
  } else if (!isValidIndianPhone(values.phone)) {
    errors.phone = "Please enter a valid Indian phone number.";
  }
  if (values.email && !isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isNonEmpty(values.city)) errors.city = "Please enter your city.";
  if (!isNonEmpty(values.propertyType)) errors.propertyType = "Please select a property type.";
  if (!values.consent) errors.consent = "Please provide consent to be contacted.";

  return errors;
}
