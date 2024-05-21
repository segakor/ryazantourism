import "./style.css";
import Image from "next/image";

const ButtonSpoiler = () => {
  return (
    <button className="button_spoiler">
        <Image
          src="/spoilerButton/arrow.svg"
          alt="arrow"
          width={12}
          height={11}
          className="button_spoiler_arrow"
        />
    </button>
  );
};

export default ButtonSpoiler;
