import Image from "next/image";
import OpenFormButton from "./OpenFormButton";

const CARDS = [
  {
    label: "Total course fee",
    amount: "₹ 1,50,000/-",
    note: "Inclusive of all taxes",
  },
  {
    label: "Fee per semester",
    amount: "₹ 37,500/-",
    note: "Inclusive of all taxes",
  },
];

export default function ProgrammeFeeSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:px-14">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            JAIN Online MBAProgramme fee
          </h2>
          <p className="text-gray-600 mt-3">
            We offer flexible payment options that allow students to pay their
            fees in semester-wise instalments.
          </p>
          <div className="flex gap-4 mt-6 max-sm:flex-col">
            {CARDS.map((c) => (
              <div
                key={c.label}
                className="flex-1 shadow rounded-3xl border p-6"
              >
                <h6 className="mb-3 text-gray-600">{c.label}</h6>
                <h4 className="text-xl font-bold text-gray-800">{c.amount}</h4>
                <small className="block mb-4 text-gray-500">{c.note}</small>
                <OpenFormButton className="w-full bg-[#f8b236] text-[#194486] py-2 rounded-lg font-semibold transition hover:opacity-90">
                  Apply Now
                </OpenFormButton>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <Image
            src="/images/jain/coursesBanner.png"
            alt="Courses"
            width={360}
            height={360}
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>
      </div>
    </section>
  );
}
