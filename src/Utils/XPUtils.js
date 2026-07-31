export function getLevelFromXP(XP) {
  return Math.floor(XP / 100) + 1;
}

 export function getTierFromLevel(level) {
  if (level >= 16) return "Diamond";
  if (level >= 11) return "Platinum";
  if (level >= 6) return "Gold";
  return "Silver";
}
