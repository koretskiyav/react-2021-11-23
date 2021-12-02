export default function Tabs({ tabs, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(({ id, label }) => (
        <button key={id} className="tabs__btn" onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
