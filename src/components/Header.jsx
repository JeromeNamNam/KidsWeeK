import { weekTitle, weekSubtitle, weekRange } from "../data/schedule";
import headerImage from "../assets/header.jpg";

// ─────────────────────────────────────────────────────────────────────────
// To replace the header photo:
//   1. Drop your photo into src/assets/, e.g. src/assets/header.jpg
//   2. Change the import above to:  import headerImage from "../assets/header.jpg";
// That's it — everything else (overlay, title, layout) stays the same.
// ─────────────────────────────────────────────────────────────────────────
export default function Header() {
  return (
    <header className="hero">
      <img className="hero__image" src={headerImage} alt="" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">{weekRange}</p>
        <h1 className="hero__title">{weekTitle}</h1>
        <p className="hero__subtitle">{weekSubtitle}</p>
      </div>
    </header>
  );
}
