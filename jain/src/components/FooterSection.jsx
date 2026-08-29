import { KEYWORDS } from "./FooterKeywords";

export default function FooterSection() {
  return (
    <footer className="bg-[#182B45] text-white py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/30 py-4">
          <p className="text-center text-[13px] text-white/80">{KEYWORDS}</p>
        </div>
        <p className="text-center text-[13px] text-white/70">
          Copyright © 2026 Radhya Education Academy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
