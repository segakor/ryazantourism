"use client";
import { ReactNode, useEffect } from "react";
import "./style.css";
import Button from "../Button/Button";
import CloseModal from "../Button/CloseModal";

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
    // backdrop
    <div
      onClick={onClose}
      className={`
        z-100
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/70" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        modal_size
          bg-white rounded-3xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <div className="absolute top-2 right-4 close_modal_header">
          <CloseModal onClick={onClose} />
        </div>

        {children}
        <div className="close_modal">
          <Button label={"Закрыть"} onClick={onClose} isBlackHover />
        </div>
      </div>
    </div>
  );
};
