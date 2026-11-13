import { getCategory } from "../data/categories";
import CategoryIcon from "./CategoryIcon";
import MapLink from "./MapLink";

const STATUS_LABEL = {
  optional: "Optional",
  tbc: "To be confirmed",
  important: "Important",
};

export default function ActivityCard({ activity }) {
  const cat = getCategory(activity.category);

  return (
    <div className="activity-card" style={{ "--accent": cat.color, "--accent-tint": cat.tint }}>
      <CategoryIcon category={activity.category} />

      <div className="activity-card__body">
        <div className="activity-card__top">
          <h4 className="activity-card__title">{activity.title}</h4>
          {activity.status && (
            <span className={`badge badge--${activity.status}`}>
              {STATUS_LABEL[activity.status]}
            </span>
          )}
        </div>

        {activity.person && (
          <div className="activity-card__person">{activity.person}</div>
        )}

        <div className="activity-card__meta">
          {activity.time && <span className="activity-card__time">🕐 {activity.time}</span>}
          {activity.organizer && (
            <span className="activity-card__organizer">· {activity.organizer}</span>
          )}
        </div>

        <MapLink activity={activity} />

        {activity.contact && (
          <p className="activity-card__contact">
            📞 Emergency contact: {activity.contact.name && `${activity.contact.name} · `}
            {activity.contact.phone}
          </p>
        )}

        {activity.note && <p className="activity-card__note">{activity.note}</p>}
      </div>
    </div>
  );
}
