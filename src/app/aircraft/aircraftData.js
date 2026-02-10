export const AIRCRAFT_CATEGORIES = {
  "light-jets": {
    slug: "light-jets",
    title: "Light Jets",
    positioning: "Efficient, flexible aircraft for short-haul European travel.",
    image: "/images/hero/Light Jets.png",
    specs: {
      range: "Up to 2,500 km",
      capacity: "6–8 passengers",
      cabin: "Compact, efficient cabin",
      routes: "Short to medium European sectors",
    },
    useCases: [
      "Business day trips",
      "Multi-city European hops",
      "Access to smaller airports",
    ],
    exampleRoutes: [
      "London ↔ Paris",
      "Zurich ↔ Milan",
      "Berlin ↔ Vienna",
    ],
  },
  "midsize-jets": {
    slug: "midsize-jets",
    title: "Midsize Jets",
    positioning: "A balance of comfort and range for longer European routes and multi-city travel.",
    image: "/images/hero/Midsize Jets.png",
    specs: {
      range: "Up to 4,000 km",
      capacity: "7–9 passengers",
      cabin: "Stand-up cabin, dedicated lavatory",
      routes: "European and North African routes",
    },
    useCases: [
      "Multi-leg European itineraries",
      "Trans-Mediterranean travel",
      "Executive team travel",
    ],
    exampleRoutes: [
      "London ↔ Rome",
      "Paris ↔ Athens",
      "Madrid ↔ Moscow",
    ],
  },
  "heavy-jets": {
    slug: "heavy-jets",
    title: "Heavy Jets",
    positioning: "Spacious cabins and intercontinental capability for long-range private travel.",
    image: "/images/hero/Heavy Jets.png",
    specs: {
      range: "Up to 7,400 km",
      capacity: "10–16 passengers",
      cabin: "Full stand-up cabin, galley, enclosed lavatory",
      routes: "Transatlantic and long-haul sectors",
    },
    useCases: [
      "Transatlantic flights",
      "Group travel in comfort",
      "Long-range business missions",
    ],
    exampleRoutes: [
      "London ↔ New York",
      "Paris ↔ Dubai",
      "Frankfurt ↔ São Paulo",
    ],
  },
  "ultra-long-range": {
    slug: "ultra-long-range",
    title: "Ultra Long Range",
    positioning: "Non-stop intercontinental flights with maximum comfort and performance.",
    image: "/images/hero/Ultra Long Range.png",
    specs: {
      range: "10,000+ km non-stop",
      capacity: "12–18 passengers",
      cabin: "Maximum cabin space, premium amenities",
      routes: "Ultra-long-haul global routes",
    },
    useCases: [
      "Non-stop intercontinental travel",
      "Maximum discretion and comfort",
      "Global reach without refuelling",
    ],
    exampleRoutes: [
      "London ↔ Singapore",
      "New York ↔ Dubai",
      "Los Angeles ↔ London",
    ],
  },
};

export const AIRCRAFT_SLUGS = Object.keys(AIRCRAFT_CATEGORIES);
