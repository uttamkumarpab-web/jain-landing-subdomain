import LeadForm from "./LeadForm";
import OpenFormButton from "./OpenFormButton";

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-15 overflow-hidden min-h-fit text-white bg-[#194486]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-4">
          <h1 className="font-bold font-poppins w-full text-[28px] leading-tight lg:text-[47px] text-white">
            Online MBA Degree From Jain University
          </h1>
          <p className="text-white text-lg mt-6">
            Get an MBA degree from JAIN Online University
          </p>
          <p className="text-white/90 text-sm mt-2">
            Online Degree | Online Exams | 100% Placement Assistance
          </p>

          <div className="hidden sm:flex flex-wrap gap-3 mt-8">
            <OpenFormButton className="bg-[#f8b236] text-[#194486] px-5 py-2.5 rounded-lg font-semibold transition hover:opacity-90">
              Download Brochure
            </OpenFormButton>
            <OpenFormButton className="bg-[#f8b236] text-[#194486] px-5 py-2.5 rounded-lg font-semibold transition hover:opacity-90">
              Apply Now
            </OpenFormButton>
          </div>
          <h5 className="text-white mt-6 sm:mt-8 text-base md:text-xl font-semibold">
            Admission Closing In 5 Days
          </h5>
        </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <LeadForm />
        </div>
      </div>
    </div>
    </section>
  );
}
