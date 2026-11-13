import { days, weekTitle } from "./data/schedule";
import Header from "./components/Header";
import DayCard from "./components/DayCard";

// Picks which day should start expanded: today, if it falls inside the
// planned week, otherwise the next upcoming day in the week — otherwise
// nothing is pre-opened.
function getDefaultOpenId() {
  const year = 2026;
  const monthIndex = 10; // November
  const today = new Date();
  const isSameYearMonth =
    today.getFullYear() === year && today.getMonth() === monthIndex;

  if (isSameYearMonth) {
    const todayDate = today.getDate();
    const exact = days.find((d) => Number(d.date) === todayDate);
    if (exact) return exact.id;

    const upcoming = days.find((d) => Number(d.date) > todayDate);
    if (upcoming) return upcoming.id;
  }

  // Before the week starts (e.g. while planning ahead): open the first day.
  if (today < new Date(year, monthIndex, Number(days[0].date))) {
    return days[0].id;
  }

  return null;
}

export default function App() {
  const defaultOpenId = getDefaultOpenId();

  return (
    <div className="app">
      <Header />

      <main className="week" aria-label={weekTitle}>
        <div className="week__list">
          {days.map((day) => (
            <DayCard key={day.id} day={day} defaultOpen={day.id === defaultOpenId} />
          ))}
        </div>

        <footer className="footer">
          <p>Made with care, for our family. 💛</p>
        </footer>
      </main>
    </div>
  );
}
