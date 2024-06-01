import "./style.css";

const CloseModal = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={`button_round grey`} onClick={onClick}>
      X
    </button>
  );
};

export default CloseModal;
