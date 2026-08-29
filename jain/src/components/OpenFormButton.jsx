"use client";

export default function OpenFormButton({ className, children }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("open-form-popup"))}
    >
      {children}
    </button>
  );
}
