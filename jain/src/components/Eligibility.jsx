import Image from "next/image";

export default function EligibilitySection() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 px-5 md:px-14">

        {/* LEFT SECTION */}
        <div>
          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Jain Online MBA Eligibility   
            </h2>
          </div>

          {/* Intro */}
          <p className="text-base md:text-xl leading-relaxed text-gray-800 mb-8">
            Admission to the programme is open to any graduate (10+2+3) from
            any recognized university satisfying the following conditions:
          </p>

          {/* Eligibility Point 1 */}
          <div className="border-l-4 border-[#ff5a00] bg-[#ffe6b9] px-6 py-5 mb-7">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#ff5a00] text-[#ff5a00] text-sm font-bold">
                  ✓
                </span>
              </div>

              <p className="text-gray-600 mt-1">
                The candidate should have secured at least{" "}
                <strong>50% (45% for SC/ST)</strong> in aggregate at a
                graduate-level university examination.
              </p>
            </div>
          </div>

          {/* Eligibility Point 2 */}
          <div className="border-l-4 border-[#ff5a00] bg-[#ffe6b9] px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#ff5a00] text-[#ff5a00] text-sm font-bold">
                  ✓
                </span>
              </div>

             <p className="text-gray-600 mt-1">
                The candidate applying in the final year of a bachelor&apos;s
                degree may also apply. Admission of such candidates will remain
                provisional until submission of the final result certificates
                in original.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src="/images/jain/eligibility.png"
            alt="Eligibility criteria and programme fee"
            width={800}
            height={600}
            priority
            className="w-full max-w-[560px] h-auto object-contain rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}