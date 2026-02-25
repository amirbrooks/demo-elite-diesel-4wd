export const business = {
  name: "Elite Diesel 4WD & Performance",
  shortName: "Elite Diesel",
  owner: "Karl",
  tagline: "GET IT FIXED RIGHT THE FIRST TIME",
  phone: "(03) 5798 3960",
  phoneTel: "tel:0357983960",
  address: "140 Greta Rd, Wangaratta VIC 3677",
  googleRating: 4.9,
  googleReviews: 123,
  facebookFollowers: 860,
  facebookRating: "5.0/5.0",
  hours: [
    { day: "Monday", time: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
    { day: "Thursday", time: "8:00 AM – 5:00 PM" },
    { day: "Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const images = {
  hero: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
  engine: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
  workshop: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
  fourwd: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
  vehicle: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
  diesel: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200&q=80",
  tools: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1200&q=80",
};

export const reviews = [
  {
    quote: "Have never had a mechanic like Karl before, you can tell his passion by the service you get.",
    by: "Jordan Hawkins",
    service: "general",
  },
  {
    quote: "After months of issues with D-Max computer & DPF, Karl worked his magic. Now 2x power & 1/2 the fuel.",
    by: "Tim Barlow",
    service: "dpf",
  },
  {
    quote: "Karl was recommended to me by multiple people, including other mechanics in the region.",
    by: "connor",
    service: "general",
  },
  {
    quote: "Another place told me $5k. Elite found the root cause for a few hundred.",
    by: "Alsha Coppolina",
    service: "diagnostics",
  },
  {
    quote: "My car is like driving a new car. It's got a new lease of life.",
    by: "Peter Kelly",
    service: "ecu",
  },
  {
    quote: "Took it to Karl, sorted at a good price. Thanks mate.",
    by: "Dale Cleghorn",
    service: "general",
  },
  {
    quote: "Karl remap + 3\" exhaust on Dmax. Towing 2.8t caravan: 17.5L→14.5L average.",
    by: "Ian Cleghorn",
    service: "ecu",
  },
  {
    quote: "Great service, excellent communication, highly recommend",
    by: "Steve Grubissa",
    service: "general",
  },
  {
    quote: "Karl's always awesome to deal with, throttle controller in my Navara, couldn't be happier!",
    by: "Facebook Review",
    service: "throttle",
  },
];

export const signatureServices = [
  {
    slug: "diesel-diagnostics",
    name: "Diesel Diagnostics",
    headline: "Find the fault. Fix it once.",
    description:
      "Dealer-level scan tools paired with real diesel experience. Karl runs injector balance rates, turbo actuator tests, and full system diagnostics that most workshops can't touch. No guesswork, no parts-swapping — just accurate diagnosis that saves you money.",
    image: "engine" as keyof typeof images,
    review: {
      quote: "Another place told me $5k. Elite found the root cause for a few hundred.",
      by: "Alsha Coppolina",
    },
  },
  {
    slug: "ecu-remapping",
    name: "ECU Remapping",
    headline: "Custom tunes. Not generic flash.",
    description:
      "Every remap is written specifically for your vehicle on Karl's dyno. Not a downloaded file from the internet. Customers consistently see 15-20% fuel savings and significantly more usable torque — especially when towing. The difference between a generic flash and a custom tune is the difference between hoping and knowing.",
    image: "diesel" as keyof typeof images,
    review: {
      quote: "Karl remap + 3\" exhaust on Dmax. Towing 2.8t caravan: 17.5L→14.5L average.",
      by: "Ian Cleghorn",
    },
  },
  {
    slug: "dpf-solutions",
    name: "DPF Solutions",
    headline: "Stop chasing DPF lights.",
    description:
      "DPF problems are rarely about the filter itself. Karl diagnoses the root cause — whether it's a faulty sensor, failed regen cycle, or upstream engine issue — so you're not throwing money at symptoms. Forced regens, sensor replacement, and proper diagnosis that actually solves the problem.",
    image: "tools" as keyof typeof images,
    review: {
      quote: "After months of issues with D-Max computer & DPF, Karl worked his magic. Now 2x power & 1/2 the fuel.",
      by: "Tim Barlow",
    },
  },
];

export const additionalServices = [
  { name: "Exhaust Systems", description: "Custom fabrication and performance exhaust upgrades" },
  { name: "Throttle Controllers", description: "HiKEIT throttle response tuning and installation" },
  { name: "Ultrasonic Cleaning", description: "Precision cleaning for injectors and engine components" },
  { name: "4WD Accessories", description: "TJM bull bars, FYRLYT driving lights, JW Speaker headlights" },
  { name: "Power Modules", description: "Direction Plus fuel management and power upgrades" },
  { name: "Filtration", description: "Donaldson filtration systems for pre-filter and catch can setups" },
  { name: "Clutch Replacement", description: "ACS Xtreme heavy-duty clutch kits for towing and performance" },
  { name: "Batteries", description: "Exide commercial and deep-cycle battery supply and fitting" },
  { name: "LED Headlight Conversions", description: "Factory-quality LED upgrades for safer night driving" },
];

export const partners = [
  "Direction Plus",
  "TJM 4x4",
  "JW Speaker",
  "Torqit",
  "FYRLYT",
  "Wynn's",
  "Donaldson",
  "ACS Xtreme",
  "Exide",
  "HiKEIT",
  "Tomcat",
];

export const vehicles = [
  "D-Max",
  "Land Cruiser",
  "Amarok",
  "BT-50",
  "Navara",
  "Ranger",
  "HiLux",
  "Triton",
];
