import { resolveMapsUrl } from "../data/maps";

// Renders the address (clickable → Google Maps directions) or, when no
// real location is known yet, a plain "Location to be confirmed" label
// that is intentionally NOT a link. When the location is simply known but
// has no mappable address (e.g. "at school"), set `locationLabel` on the
// activity instead — it shows as plain, non-clickable text.
export default function MapLink({ activity }) {
  const url = resolveMapsUrl(activity);

  if (!url) {
    if (activity.locationLabel) {
      return <span className="map-link map-link--plain">📍 {activity.locationLabel}</span>;
    }
    return <span className="map-link map-link--tbc">📍 Location to be confirmed</span>;
  }

  return (
    <a
      className="map-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get directions${activity.address ? ` to ${activity.address}` : ""}`}
    >
      <span className="map-link__icon">📍</span>
      <span className="map-link__text">
        {activity.address || "Get directions"}
      </span>
      <span className="map-link__chevron">›</span>
    </a>
  );
}
