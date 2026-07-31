export default function StreakCounter({ streak }) {
  return (
    <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-orange-50 text-orange-600 font-semibold">
      <span aria-hidden="true">🔥</span>
      <span>{streak} day streak</span>
    </div>
  );
}