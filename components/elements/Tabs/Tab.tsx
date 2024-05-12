import "./style.css";

export const Tab = ({
  label,
  id,
  onClick,
  isActive
}: {
  label: string;
  id: string;
  onClick: () => void;
  isActive:boolean
}) => {
  return (
    <div onClick={onClick} className={`tab ${isActive && 'active'}`} id={id}>
      <span className="button-text">{label}</span>
    </div>
  );
};
