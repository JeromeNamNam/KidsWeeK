// ─────────────────────────────────────────────────────────────────────────
// ONE WEEK WITH THE KIDS — schedule data
//
// This is the ONLY file you need to edit to update the planner.
//   • Change weekTitle / weekSubtitle / weekRange for the header text.
//   • Add, remove or edit items inside the `days` array below.
//   • Every activity can have either:
//        address: "a full street address"      → a Google Maps link is
//                                                  generated automatically
//        mapsUrl: "https://..."                 → used as-is (e.g. a fixed
//                                                  Google Maps place link)
//        (neither)                              → shows "Location to be
//                                                  confirmed", no fake link
//        locationLabel: "School"                 → use when the place is
//                                                  known but not mappable
//                                                  (shows plain text, no link,
//                                                  no "to be confirmed")
//        locationName: "Collège Saint-Hubert"    → shows this friendly name
//                                                  instead of the raw address,
//                                                  while the map link still
//                                                  points to `address`
//        contact: { name: "...", phone: "..." }  → shows an "Emergency
//                                                  contact" line (name is
//                                                  optional, phone required)
//   • `category` controls the accent color + icon:
//        "hockey" | "horseriding" | "music" | "school" | "speech" | "gym"
//   • `status` is optional: "optional" | "tbc" | "important"
// ─────────────────────────────────────────────────────────────────────────

export const weekTitle = "One Week With The Kids";
export const weekSubtitle = "Little moments, big adventures.";
export const weekRange = "Saturday 21 – Friday 27 November 2026";

// Exact Google Maps location requested for EquiAcademy.
const EQUIACADEMY_URL = "https://maps.google.com/?ftid=0x47c3db00757efe5b:0x1a125d108eafc17f";

// Shared addresses, reused across several activities below.
const SCHOOL_ADDRESS = "Avenue Joseph Chaudron 115, 1160 Auderghem (Brussels), Belgium";
const MUSIC_ADDRESS = "Rue François Ruytinx 31, 1170 Watermaal-Bosvoorde, Belgium";
const GYM_ADDRESS = "Jean Van Horenbeeck 196, 1160 Auderghem (Brussels), Belgium";

// Emergency contacts per activity type.
const HOCKEY_CONTACT = { name: "Jolie Lagasse", phone: "+32 477 13 90 69" };
const HORSERIDING_CONTACT = { phone: "0494 49 71 77" };
const MUSIC_CONTACT = { phone: "02 673 76 97" };

export const days = [
  {
    id: "sat-21",
    dayName: "Saturday",
    dayShort: "Sat",
    date: "21",
    month: "November",
    summary: "Diego — Hockey match",
    activities: [
      {
        id: "sat-21-hockey",
        category: "hockey",
        title: "Hockey match",
        person: "Diego",
        time: "Time to be confirmed",
        status: "optional",
        note: "Optional activity.",
        contact: HOCKEY_CONTACT,
      },
    ],
  },
  {
    id: "sun-22",
    dayName: "Sunday",
    dayShort: "Sun",
    date: "22",
    month: "November",
    summary: "Nelly — Equestrian competition",
    activities: [
      {
        id: "sun-22-equestrian",
        category: "horseriding",
        title: "Equestrian competition",
        person: "Nelly",
        time: "Time to be confirmed",
        organizer: "EquiAcademy",
        mapsUrl: EQUIACADEMY_URL,
        status: "tbc",
        contact: HORSERIDING_CONTACT,
      },
    ],
  },
  {
    id: "mon-23",
    dayName: "Monday",
    dayShort: "Mon",
    date: "23",
    month: "November",
    summary: "Nelly — Study · 17:20 — Pick up the kids",
    activities: [
      {
        id: "mon-23-study",
        category: "school",
        title: "After-school study (étude)",
        person: "Nelly",
        time: "16:00 – 17:00",
        address: SCHOOL_ADDRESS,
        locationName: "Collège Saint-Hubert",
      },
      {
        id: "mon-23-pickup",
        category: "school",
        title: "Pick up the kids",
        time: "17:20",
        address: SCHOOL_ADDRESS,
        locationName: "Collège Saint-Hubert",
        note: "Nelly has after-school study (étude) until 17:00.",
      },
    ],
  },
  {
    id: "tue-24",
    dayName: "Tuesday",
    dayShort: "Tue",
    date: "24",
    month: "November",
    summary: "Nelly — Study · Diego — Music academy",
    activities: [
      {
        id: "tue-24-study",
        category: "school",
        title: "After-school study (étude)",
        person: "Nelly",
        time: "16:00 – 17:00",
        address: SCHOOL_ADDRESS,
        locationName: "Collège Saint-Hubert",
      },
      {
        id: "tue-24-music",
        category: "music",
        title: "Music academy · Solfège",
        person: "Diego",
        time: "16:50 – 17:40",
        address: MUSIC_ADDRESS,
        contact: MUSIC_CONTACT,
      },
    ],
  },
  {
    id: "wed-25",
    dayName: "Wednesday",
    dayShort: "Wed",
    date: "25",
    month: "November",
    summary: "Speech therapy · Hockey · Horse riding",
    busiest: true,
    activities: [
      {
        id: "wed-25-speech",
        category: "speech",
        title: "Speech therapy · Logopédie",
        person: "Nelly",
        time: "14:00 – 15:00",
        address: "Rue du Moulin à Papier 54, 1160 Brussels, Belgium",
      },
      {
        id: "wed-25-hockey",
        category: "hockey",
        title: "Indoor hockey training",
        person: "Diego",
        time: "14:30",
        status: "tbc",
        contact: HOCKEY_CONTACT,
      },
      {
        id: "wed-25-horse",
        category: "horseriding",
        title: "Horse riding",
        person: "Nelly",
        time: "17:00 – 18:00",
        organizer: "EquiAcademy",
        mapsUrl: EQUIACADEMY_URL,
        note: "Possible direct drop-off after speech therapy.",
        contact: HORSERIDING_CONTACT,
      },
    ],
  },
  {
    id: "thu-26",
    dayName: "Thursday",
    dayShort: "Thu",
    date: "26",
    month: "November",
    summary: "Diego — Gym · Nelly — Study · Pickup 17:20",
    activities: [
      {
        id: "thu-26-gym",
        category: "gym",
        title: "Gym",
        person: "Diego",
        time: "8:30",
        address: GYM_ADDRESS,
      },
      {
        id: "thu-26-study",
        category: "school",
        title: "After-school study (étude)",
        person: "Nelly",
        time: "16:00 – 17:00",
        address: SCHOOL_ADDRESS,
        locationName: "Collège Saint-Hubert",
      },
      {
        id: "thu-26-pickup",
        category: "school",
        title: "Pick up the kids",
        time: "17:20",
        address: SCHOOL_ADDRESS,
        locationName: "Collège Saint-Hubert",
        note: "Nelly has after-school study (étude) until 17:00.",
      },
    ],
  },
  {
    id: "fri-27",
    dayName: "Friday",
    dayShort: "Fri",
    date: "27",
    month: "November",
    summary: "Nelly — Study · Diego — Music & Hockey",
    activities: [
      {
        id: "fri-27-study",
        category: "school",
        title: "After-school study (étude)",
        person: "Nelly",
        time: "16:00 – 17:00",
        address: SCHOOL_ADDRESS,
        locationName: "Collège Saint-Hubert",
      },
      {
        id: "fri-27-music",
        category: "music",
        title: "Music academy · Solfège",
        person: "Diego",
        time: "16:50 – 17:40",
        address: MUSIC_ADDRESS,
        contact: MUSIC_CONTACT,
      },
      {
        id: "fri-27-hockey",
        category: "hockey",
        title: "Hockey training",
        person: "Diego",
        time: "17:30 – 18:30",
        status: "important",
        note: "Diego will arrive late because his music lesson overlaps with hockey.",
        contact: HOCKEY_CONTACT,
      },
    ],
  },
];
