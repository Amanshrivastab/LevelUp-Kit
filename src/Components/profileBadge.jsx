export default function ProfileBadge(props) {
  const tierColors = {
    Silver: "bg-slate-200 text-slate-700",
    Gold: "bg-yellow-100 text-yellow-700",
    Platinum: "bg-cyan-100 text-cyan-700",
    Diamond: "bg-purple-100 text-purple-700",
  };

  return (
    <div className={`px-4 py-2 rounded-full inline-block ${tierColors[props.tier]}`}>
      {props.tier} — Level {props.level}
    </div>
  );
}