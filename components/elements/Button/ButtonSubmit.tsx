import { useFormStatus } from "react-dom";
import "./style.css";

const ButtonSubmit = ({
  label,
  onClick,
  isBlackHover,
}: {
  label: string;
  onClick?: () => void;
  isBlackHover?: boolean;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={"submit"}
      className={`button_wrapper ${isBlackHover && "black_hover"}`}
      onClick={onClick}
      disabled={pending}
    >
      <div className="text4 flex gap-2 items-center">
        {pending ? (
          <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-3 border-t-blue-600" />
        ) : (
          label
        )}
      </div>
    </button>
  );
};

export default ButtonSubmit;
