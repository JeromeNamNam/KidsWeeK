// Visual language per activity category: a restrained accent color + icon.
// Edit the `color` values here to retune the whole palette at once.
export const categories = {
  hockey: {
    label: "Hockey",
    color: "#3A7CA5",
    tint: "#EAF2F8",
    emoji: "🏑",
  },
  horseriding: {
    label: "Horse riding",
    color: "#4C8B5A",
    tint: "#EEF6EF",
    emoji: "🐎",
  },
  music: {
    label: "Music",
    color: "#7A5FA3",
    tint: "#F2EEF9",
    emoji: "🎵",
  },
  school: {
    label: "School",
    color: "#6B6B70",
    tint: "#F0F0F1",
    emoji: "🎒",
  },
  speech: {
    label: "Speech therapy",
    color: "#C97A3D",
    tint: "#FBF0E7",
    emoji: "💬",
  },
  gym: {
    label: "Gym",
    color: "#2E8B86",
    tint: "#E7F4F3",
    emoji: "🤸",
  },
};

export function getCategory(key) {
  return categories[key] || { label: "", color: "#6B6B70", tint: "#F0F0F1", emoji: "📅" };
}
