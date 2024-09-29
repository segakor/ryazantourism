import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

export const MODE_VISUALLY_KEY_NAME = "modeVisually";

export const ModeVisually = () => {
  const [modeVisually, setModeVisually] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const value = cookies[MODE_VISUALLY_KEY_NAME];

    setModeVisually(value);
  }, []);

  const handleClick = () => {
    setCookie(null, MODE_VISUALLY_KEY_NAME, modeVisually === "1" ? "0" : "1");
    window.location.reload();
  };

  return (
    <button
      className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all"
      onClick={handleClick}
    >
      <div>
        <svg
          width="20"
          height="13"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3211 6.24688C19.2937 6.18516 18.632 4.71719 17.1609 3.24609C15.2008 1.28594 12.725 0.25 9.99999 0.25C7.27499 0.25 4.79921 1.28594 2.83906 3.24609C1.36796 4.71719 0.703118 6.1875 0.678899 6.24688C0.643362 6.32681 0.625 6.41331 0.625 6.50078C0.625 6.58826 0.643362 6.67476 0.678899 6.75469C0.706243 6.81641 1.36796 8.28359 2.83906 9.75469C4.79921 11.7141 7.27499 12.75 9.99999 12.75C12.725 12.75 15.2008 11.7141 17.1609 9.75469C18.632 8.28359 19.2937 6.81641 19.3211 6.75469C19.3566 6.67476 19.375 6.58826 19.375 6.50078C19.375 6.41331 19.3566 6.32681 19.3211 6.24688ZM9.99999 9.625C9.38193 9.625 8.77774 9.44172 8.26384 9.09834C7.74993 8.75496 7.34939 8.2669 7.11287 7.69589C6.87635 7.12487 6.81446 6.49653 6.93504 5.89034C7.05562 5.28415 7.35325 4.72733 7.79028 4.29029C8.22732 3.85325 8.78415 3.55562 9.39034 3.43505C9.99653 3.31447 10.6249 3.37635 11.1959 3.61288C11.7669 3.8494 12.255 4.24994 12.5983 4.76384C12.9417 5.27775 13.125 5.88193 13.125 6.5C13.125 7.3288 12.7958 8.12366 12.2097 8.70971C11.6237 9.29576 10.8288 9.625 9.99999 9.625Z"
            fill="#898989"
          />
        </svg>
      </div>
      <div>{modeVisually === "1" ? "Обычная версия" : "Версия для слабовидящих"}</div>
    </button>
  );
};
