"use client";
import { ReactNode, useEffect } from "react";
import "./style.css";

export const Modal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    if (open) {
      document.getElementsByTagName("body")[0].classList.add("lock_body");
      return;
    }
    document.getElementsByTagName("body")[0].classList.remove("lock_body");
  }, [open]);

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27 && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose, open]);

  return (
    <div
      onClick={onClose}
      className={`
        z-100
        fixed inset-0 flex justify-center items-center
        h-screen
        ${open ? "visible bg-black/70" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        modal_size
          bg-white rounded-3xl shadow
          h-screen
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <div className="close" onClick={onClose}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.19555 4.1936C4.4534 3.93582 4.80307 3.79102 5.16768 3.79102C5.53228 3.79102 5.88195 3.93582 6.1398 4.1936L11.0018 9.0556L15.8638 4.1936C16.1231 3.94313 16.4705 3.80454 16.831 3.80767C17.1915 3.8108 17.5364 3.95541 17.7913 4.21035C18.0462 4.46528 18.1908 4.81015 18.194 5.17067C18.1971 5.53119 18.0585 5.87852 17.8081 6.13785L12.9461 10.9998L17.8081 15.8618C18.0585 16.1212 18.1971 16.4685 18.194 16.829C18.1908 17.1895 18.0462 17.5344 17.7913 17.7893C17.5364 18.0443 17.1915 18.1889 16.831 18.192C16.4705 18.1952 16.1231 18.0566 15.8638 17.8061L11.0018 12.9441L6.1398 17.8061C5.88047 18.0566 5.53314 18.1952 5.17262 18.192C4.8121 18.1889 4.46724 18.0443 4.2123 17.7893C3.95736 17.5344 3.81276 17.1895 3.80962 16.829C3.80649 16.4685 3.94508 16.1212 4.19555 15.8618L9.05755 10.9998L4.19555 6.13785C3.93778 5.88 3.79297 5.53032 3.79297 5.16572C3.79297 4.80112 3.93778 4.45145 4.19555 4.1936Z"
              fill="black"
              fillOpacity="0.2"
            ></path>
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};
