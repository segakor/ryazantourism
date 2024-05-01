import "./style.css";

const Button = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button className="button_wrapper" onClick={onClick}>
      {name.toUpperCase()}
    </button>
  );
};

export default Button;
