import "./style.css";

const Button = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button className="button_wrapper" onClick={onClick}>
      <div className="text4">{name}</div>
    </button>
  );
};

export default Button;
