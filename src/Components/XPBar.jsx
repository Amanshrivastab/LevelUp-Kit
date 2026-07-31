export default function XPBar({ xp, level }) {
  const currentLevelBaseXP = (level - 1) * 100;
  const xpIntoLevel = xp - currentLevelBaseXP;
  const percentage = Math.min((xpIntoLevel / 100) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{xp} XP</span>
        <span>{level * 100} XP</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}