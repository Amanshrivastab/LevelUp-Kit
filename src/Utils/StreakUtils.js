


export function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

export function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
} 


export function calculateNewStreak(lastPlayedDate, currentStreak) {
  const today = getTodayString();
  const yesterday = getYesterdayString();
  if (lastPlayedDate === today) return currentStreak;
  if (lastPlayedDate === yesterday) return currentStreak + 1;
  return 1;
}
