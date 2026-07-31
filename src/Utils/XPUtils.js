export function getLevelFromXP(XP) {
  return Math.floor(XP / 100) + 1;
}

 export function getTierFromLevel(level) {
  if (level >= 12) return "Diamond";
  if (level >= 8) return "Platinum";
  if (level >= 4) return "Gold";
  return "Silver";
}
