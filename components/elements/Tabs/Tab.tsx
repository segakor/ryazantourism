import "./style.css";

export const Tab = ({
  label,
  id,
  onClick,
  isActive,
}: {
  label: string;
  id: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`tab cursor-pointer transition-all bg-[var(--color-partner-card-grey)] flex justify-center 
    rounded-[500px] md:px-10 md:py-5 px-6 py-3 whitespace-nowrap ${isActive && "active bg-black text-white"
        }`}
      id={id}
    >
      <span className="button-text">{label}</span>
    </div>
  );
};
