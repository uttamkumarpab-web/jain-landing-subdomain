"use client";

import { useEffect } from "react";

export default function ConversionTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lead_form_success" });

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion");
    }
  }, []);

  return null;
}
