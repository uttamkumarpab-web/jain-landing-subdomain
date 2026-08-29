"use client";

import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

export default function PopupForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-form-popup", handleOpen);
    return () => window.removeEventListener("open-form-popup", handleOpen);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no_scroll", open);
    return () => document.body.classList.remove("no_scroll");
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        className="popup-overlay"
        id="popup-overlay"
        style={{ display: open ? "block" : "none" }}
        onClick={() => setOpen(false)}
      />
      <div className={`form-popup ${open ? "show" : ""}`} id="popup-form-wrapper">
        <span className="form-close-btn" onClick={() => setOpen(false)}>
          &times;
        </span>
        {open && <LeadForm />}
      </div>
    </>
  );
}
