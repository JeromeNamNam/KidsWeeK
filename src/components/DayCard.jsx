import { useState, useRef, useEffect } from "react";
import CategoryIcon from "./CategoryIcon";
import ActivityCard from "./ActivityCard";

export default function DayCard({ day, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef(null);
  const [height, setHeight] = useState(defaultOpen ? "auto" : 0);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) {
      setHeight(el.scrollHeight);
      const t = setTimeout(() => setHeight("auto"), 320);
      return () => clearTimeout(t);
    } else {
      setHeight(el.scrollHeight);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [open]);

  const primaryCategory = day.activities[0]?.category;

  return (
    <section className={`day-card ${open ? "day-card--open" : ""}`}>
      <button
        className="day-card__header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`panel-${day.id}`}
      >
        <CategoryIcon category={primaryCategory} size={48} />

        <div className="day-card__info">
          <div className="day-card__dateline">
            <span className="day-card__day">{day.dayName}</span>
            <span className="day-card__date">
              {day.date} {day.month}
            </span>
            {day.busiest && <span className="day-card__flag">Busiest day</span>}
          </div>
          <p className="day-card__summary">{day.summary}</p>
        </div>

        <span className={`day-card__chevron ${open ? "day-card__chevron--open" : ""}`}>
          ⌄
        </span>
      </button>

      <div
        id={`panel-${day.id}`}
        className="day-card__panel"
        style={{ height: height === "auto" ? "auto" : `${height}px` }}
        ref={panelRef}
      >
        <div className="day-card__activities">
          {day.activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
