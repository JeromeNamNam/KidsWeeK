import { getCategory } from "../data/categories";

// Small round tinted badge with an emoji glyph — stands in for a
// photograph without adding any image weight to the bundle.
export default function CategoryIcon({ category, size = 44 }) {
  const cat = getCategory(category);
  return (
    <div
      className="category-icon"
      style={{
        width: size,
        height: size,
        background: cat.tint,
        color: cat.color,
        fontSize: size * 0.5,
      }}
      aria-hidden="true"
    >
      {cat.emoji}
    </div>
  );
}
