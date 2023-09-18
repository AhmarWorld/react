import "./Button.css";

export default function Button({ icon, children, onClick }) {
  return (
    <button onClick={onClick}>
      <div className="button-inner">
        {icon}
        {children}
      </div>
    </button>
  );
}
