export default function XPBar(props) {
  const percentage = props.xp % 100;
  return (
    <div style={{ width: "100%", height: "10px", background: "gray" }}>
      <div style={{ width: percentage + "%", height: "10px", background: "green" }}></div>
    </div>
  );
}