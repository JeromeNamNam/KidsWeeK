// Builds a Google Maps "get directions" universal link from a plain address.
// Universal links open the Google Maps app on iPhone when installed,
// and fall back to Google Maps in the browser otherwise.
export function directionsUrl(address) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

// Resolves the best map link for an activity: an explicit mapsUrl wins,
// otherwise one is generated from `address`. Returns null when neither is
// available — callers must show "Location to be confirmed" and NOT invent
// a destination.
export function resolveMapsUrl(activity) {
  if (activity.mapsUrl) return activity.mapsUrl;
  if (activity.address) return directionsUrl(activity.address);
  return null;
}
