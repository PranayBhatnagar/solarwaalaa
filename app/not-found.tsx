import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <Container className="py-24 text-center flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-ink">Page not found</h1>
      <p className="text-ink/70 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button href="/" size="lg">
        Back to Home
      </Button>
      <Link href="/contact" className="text-sm text-deep underline">
        Contact us instead
      </Link>
    </Container>
  );
}
