


export function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

export function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
} 