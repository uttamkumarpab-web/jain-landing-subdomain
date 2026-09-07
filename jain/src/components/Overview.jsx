const PROGRAM_DETAILS = [
  {
    particular: "University",
    details: "JAIN (Deemed-to-be University)",
  },
  {
    particular: "Program",
    details: "Online MBA",
  },
  {
    particular: "Mode",
    details: "Online",
  },
  {
    particular: "Duration",
    details: "2 Years",
  },
  {
    particular: "Eligibility",
    details:
      "Bachelor’s Degree of minimum 3 years from a recognized university with at least 50% marks or equivalent CGPA. 45% marks or equivalent CGPA is applicable for SC/ST candidates. Final-year bachelor’s students are also eligible to apply.",
  },
  {
    particular: "Total Fees",
    details:
      "₹1,60,000 onwards for the two-year MBA, depending on the selected elective. Registration and examination fees are additional.",
  },
  {
    particular: "Semester Fee",
    details:
      "₹40,000 onwards per semester, depending on the selected elective.",
  },
  {
    particular: "Specializations",
    details: (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {[
          "Finance",
          "Marketing",
          "Human Resource Management",
          "General Management",
          "Finance and Marketing",
          "Finance and Business Analytics",
          "Marketing and Business Analytics",
          "Human Resource Management and Finance",
          "Marketing and Human Resource Management",
          "Human Resource and Business Analytics",
          "Supply Chain, Production and Operations Management",
          "Business Intelligence and Analytics",
          "International Finance (Accredited by ACCA, UK)",
          "Data Science and Artificial Intelligence",
          "Digital Marketing and E-Commerce",
          "AI for Finance",
          "AI for Marketing",
          "AI for Human Resources",
          "AI for International Finance",
        ].map((specialization) => (
          <li
            key={specialization}
            className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#f8b236]"
          >
            {specialization}
          </li>
        ))}
      </ul>
    ),
  },
  {
    particular: "Admission",
    details:
      "Admissions are offered through JAIN Online’s application process. The current official MBA page displays an admissions deadline of 6 September; applicants should verify the next active intake and deadline on the official admission portal before applying.",
  },
  {
    particular: "Learning Mode",
    details:
      "Online learning with live weekend classes, recorded learning content, digital resources and online assessments.",
  },
];

export default function JainOnlineMBAOverview() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* HEADING */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            JAIN Online MBA Overview
          </h2>

          <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-gray-600">
            Get a quick overview of the JAIN Online MBA program, including
            eligibility, fees, duration, electives, admission details and
            learning mode.
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">

          {/* HEADER */}
          <div className="grid grid-cols-1 md:grid-cols-[25%_75%] bg-[#194486] text-white">
            <div className="px-5 md:px-7 py-4 font-bold text-sm md:text-base">
              Particular
            </div>

            <div className="hidden md:block px-5 md:px-7 py-4 font-bold text-sm md:text-base">
              Details
            </div>
          </div>

          {/* ROWS */}
          {PROGRAM_DETAILS.map((item, index) => (
            <div
              key={item.particular}
              className={`grid grid-cols-1 md:grid-cols-[25%_75%] ${
                index !== PROGRAM_DETAILS.length - 1
                  ? "border-b border-gray-200"
                  : ""
              } ${
                index % 2 === 0
                  ? "bg-[#fffaf1]"
                  : "bg-white"
              }`}
            >

              {/* PARTICULAR */}
              <div className="flex items-center px-5 md:px-7 py-4 md:py-5">
                <span className="mr-3 h-2 w-2 shrink-0 rounded-full bg-[#f8b236]" />

                <span className="font-semibold text-[#194486] text-sm md:text-base">
                  {item.particular}
                </span>
              </div>

              {/* DETAILS */}
              <div className="px-5 md:px-7 py-4 md:py-5 text-sm md:text-base leading-relaxed text-gray-700 border-t md:border-t-0 md:border-l border-gray-200">
                {item.details}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}