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
 * Directors' paragraphs are deliberately generic (business asked for
 * placeholder-style copy here rather than specific claims) — update once
 * real background/responsibilities are supplied for each.
 *
 * Photos for Reena Singh and Shiv Pratap Singh are cropped from the
 * company's GST registration certificate (AA0902260830847_RC12032026.pdf,
 * Annexure B — Details of Managing/Whole-time Directors and Key
 * Managerial Persons), which is the source the business pointed to.
 */
export const directors: TeamMember[] = [
  {
    name: "Shivansu Singh",
    title: "Director",
    photo: "/images/team/shivansu-singh.webp",
    note:
      "As Director at Solarwaala, Shivansu Singh works closely with the team to keep every project moving smoothly — from the first site visit through to final commissioning. He believes a good solar installation is as much about the process as it is about the panels themselves: clear communication, realistic timelines, and no surprises along the way for the customer. Whether that means coordinating with our installation crews on the ground or following up with a customer after their system goes live, his focus stays on making sure every project reflects the same standard of care, regardless of its size. As Solarwaala continues to grow across Uttar Pradesh, that consistency is what he sees as central to earning — and keeping — every customer's trust.",
  },
  {
    name: "Reena Singh",
    title: "Director",
    photo: "/images/team/reena-singh.webp",
    note:
      "As Director at Solarwaala, Reena Singh supports the company's day-to-day operations and governance, helping make sure Solarwaala runs on a solid, dependable foundation as it grows across Uttar Pradesh. She works to see that the systems behind the business — from compliance to internal processes — are as reliable as the solar installations Solarwaala delivers to its customers. In her view, sound governance isn't just a back-office concern; it's what allows the team on the ground to stay focused on doing right by every customer, project after project. As the company expands its reach across the state, she remains focused on keeping that foundation strong.",
  },
  {
    name: "Shiv Pratap Singh",
    title: "Director",
    photo: "/images/team/shiv-pratap-singh.webp",
    note:
      "As Director at Solarwaala, Shiv Pratap Singh brings experience and steady oversight to the company's leadership. He believes a business built on a mission as ambitious as bringing reliable, affordable solar power to homes and businesses across Uttar Pradesh needs an equally steady hand guiding it from behind the scenes. His role is to support that stability — helping the leadership team stay focused on long-term, sustainable growth rather than short-term shortcuts. It's a responsibility he takes seriously, knowing that every family and business Solarwaala serves is trusting the company to deliver on its promise.",
  },
];
