export default function ProfileBadge(props) {
  const tierColors = {
    Silver: "bg-slate-200 text-slate-700",
    Gold: "bg-yellow-100 text-yellow-700",
    Platinum: "bg-cyan-100 text-cyan-700",
    Diamond: "bg-purple-100 text-purple-700",
  };

  return (
    <div className={`px-4 py-2 rounded-full inline-flex items-center gap-2 font-medium ${tierColors[props.tier]}`}>
      <span>{props.tier}</span>
      <span className="text-xs bg-black/10 px-2 py-0.5 rounded-full">
        Lv {props.level}
      </span>
    </div>
  );
}