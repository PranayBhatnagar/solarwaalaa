/**
 * Team content for the /about page. Unlike most placeholder content in
 * this codebase, this is real, business-supplied information (names,
 * photos, and notes provided directly by Solarwaala) — not a fabricated
 * placeholder (spec section 3).
 */
export type TeamMember = {
  name: string;
  title: string;
  photo: string;
  note: string;
};

export const founder: TeamMember = {
  name: "Vivek Bhatnagar",
  title: "Founder & CEO",
  photo: "/images/team/vivek-bhatnagar.webp",
  note:
    "Solar energy has never mattered more than it does right now. As electricity costs keep climbing and the effects of climate change become harder to ignore, the shift to solar isn't something we can put off for tomorrow — it's a decision that changes things today. When I started Solarwaala, I wanted to give homes and businesses across Uttar Pradesh a simple way to take control of their electricity costs and generate their own clean power. For many of our customers, that means today's costly electricity bills come down dramatically — for some, all the way to zero. But this is about more than savings alone. I believe solar is the foundation of how India will power itself in the years ahead: cleaner, more self-reliant, and within reach for every family and every business we serve.",
};

/**
 * Director's paragraph is deliberately generic (business asked for
 * placeholder-style copy here rather than specific claims) — update once
 * real background/responsibilities are supplied.
 */
export const director: TeamMember = {
  name: "Shivansu Singh",
  title: "Director",
  photo: "/images/team/shivansu-singh.webp",
  note:
    "As Director at Solarwaala, Shivansu Singh works closely with the team to keep every project moving smoothly — from the first site visit through to final commissioning. His focus is on clear communication and a dependable experience for every customer making the move to solar.",
};
