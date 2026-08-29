import OpenFormButton from "./OpenFormButton";

export default function CtaSection() {
  return (
    <section className="bg-[#194486] py-16 px-4 text-center text-white">
      <div className="max-w-7xl mx-auto">
        <h5 className="font-semibold text-lg">Connect for any queries</h5>
        <h1 className="font-bold text-2xl md:text-4xl mb-4">
          Jain Online University
        </h1>
        <OpenFormButton className="bg-[#f8b236] text-[#194486] px-6 py-2.5 rounded-lg font-semibold transition hover:opacity-90">
          Connect with an Expert
        </OpenFormButton>
      </div>
    </section>
  );
}
