import Icons from "../Logo/Icons";
import "./style.css";

const RoundButton = ({
  onClick,
  type,
}: {
  onClick: () => void;
  type: "prev" | "next";
}) => {
  return (
    <button className={`button_round ${type}`} onClick={onClick}>
      <Icons icon="arrow_button_round" />
    </button>
  );
};

export default RoundButton;
