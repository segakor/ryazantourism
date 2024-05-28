import "./style.css";

const Button = ({
  label,
  onClick,
  isBlackHover,
}: {
  label: string;
  onClick: () => void;
  isBlackHover?: boolean;
}) => {
  return (
    <button className={`button_wrapper ${isBlackHover && 'black_hover'}`} onClick={onClick}>
      <div className="text4">{label}</div>
    </button>
  );
};

export default Button;
