import Image from "next/image";
import OpenFormButton from "./OpenFormButton";

const REASONS = [
  {
    img: "/images/jain/Holistic.png",
    title: "Comprehensive Curriculum",
    points: [
      "Build future-ready skills through a well-structured curriculum and diverse electives across UG and PG programs.",
      "Gain practical, industry-relevant knowledge designed to prepare you for career opportunities.",
    ],
  },
  {
    img: "/images/jain/Academic.png",
    title: "Experienced Faculty & Industry Experts",
    points: [
      "Learn from experienced faculty through engaging and interactive online learning sessions.",
      "Benefit from expert guidance and industry insights to develop job-ready skills.",
    ],
  },
  {
    img: "/images/jain/Build.png",
    title: "Dedicated Career Assistance",
    points: [
      "Access job opportunities and career support from a network of 2,000+ leading companies globally.",
      "Prepare for your career with resume building, interview preparation, and career-focused workshops.",
    ],
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/images/jain/logo.png"
            alt="JAIN Online Logo"
            width={200}
            height={60}
            className="mx-auto mb-4"
          />
          <p className="text-lg text-gray-600">
            Reasons to pursue Online degree program from Jain Online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <div
              key={i}
              className="bg-white border-t border-gray-100 rounded-xl p-7 shadow-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={r.img}
                  alt={r.title}
                  width={30}
                  height={30}
                  className="opacity-70"
                />
                <h5 className="mb-0 text-gray-700 font-semibold">{r.title}</h5>
              </div>
              <ul className="space-y-3 mb-6">
                {r.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-600">
                    <svg
                      className="mt-0.5 text-green-500 shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <OpenFormButton className="w-full bg-[#f8b236] text-[#194486] py-2 rounded-lg font-semibold transition hover:opacity-90">
                Know More
              </OpenFormButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
