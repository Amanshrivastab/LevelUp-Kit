import { useState, useEffect } from "react";
import ProfileBadge from "./Components/profileBadge";
import XPBar from "./Components/XPBar";
import StreakCounter from "./Components/StreakCounter";
import MathGame from "./Components/mathGame";


function getLevelFromXP(XP) {
  return Math.floor(XP / 100) + 1;
}

function getTierFromLevel(level) {
  if (level >= 16) return "Diamond";
  if (level >= 11) return "Platinum";
  if (level >= 6) return "Gold";
  return "Silver";
}

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

function calculateNewStreak(lastPlayedDate, currentStreak) {
  const today = getTodayString();
  const yesterday = getYesterdayString();
  if (lastPlayedDate === today) return currentStreak;
  if (lastPlayedDate === yesterday) return currentStreak + 1;
  return 1;
}

export default function App() {
  const [XP, setXP] = useState(() => {
    const saved = localStorage.getItem("XP");
    return saved ? Number(saved) : 0;
  });
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("streak");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    const lastPlayedDate = localStorage.getItem("lastPlayedDate");
    const newStreak = calculateNewStreak(lastPlayedDate, streak);
    setStreak(newStreak);
    localStorage.setItem("streak", newStreak);
    localStorage.setItem("lastPlayedDate", getTodayString());
  }, []);

  function handleCorrectAnswer(points) {
    setXP((prev) => {
      const updated = prev + points;
      localStorage.setItem("XP", updated);
      return updated;
    });
  }

  const level = getLevelFromXP(XP);
  const tier = getTierFromLevel(level);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          {/* profile badge is here */}
          <ProfileBadge tier={tier} level={level} />
          {/* streak counter is here */}
          <StreakCounter streak={streak} /> 
        </div>

        {/* xp bar will go here */}
          <XPBar  xp= {XP}/>
        

        {/* math function is here */}
        <MathGame  onCorrectAnswer = {handleCorrectAnswer} />
      </div>
    </div>
  );
}