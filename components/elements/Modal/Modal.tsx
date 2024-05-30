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
    // backdrop
    <div
      onClick={onClose}
      className={`
        z-100
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/40" : "invisible"}
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
        <button
          onClick={onClose}
          className="absolute top-2 right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 rounded-full"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
