import OpenFormButton from "./OpenFormButton";

const FAQS = [
  {
    question: "1. What is JAIN Online MBA?",
    answer:
      "JAIN Online MBA is a two-year online postgraduate management program offered by JAIN (Deemed-to-be University). The program is designed to help learners develop management knowledge and industry-relevant skills through online learning, live sessions, recorded content, and digital learning resources.",
  },
  {
    question: "2. What is the JAIN Online MBA fee?",
    answer:
      "The JAIN Online MBA fee starts from ₹1,60,000 for the complete two-year program, depending on the selected elective or specialization. The fee can vary across different electives, and applicable registration and examination fees may be charged separately.",
  },
  {
    question: "3. What is the eligibility for JAIN Online MBA?",
    answer:
      "Candidates must have a bachelor’s degree of at least three years’ duration from a recognized university with a minimum of 50% marks or equivalent CGPA. Candidates belonging to SC/ST categories require a minimum of 45%. Final-year bachelor’s degree students can also apply.",
  },
  {
    question: "4. What are the JAIN Online MBA specializations?",
    answer:
      "JAIN Online offers 19 MBA electives or specializations, including Finance, Marketing, Human Resource Management, General Management, Finance & Marketing, Finance & Business Analytics, Marketing & Business Analytics, Business Intelligence & Analytics, Data Science & Artificial Intelligence, Digital Marketing & E-Commerce, AI for Finance, AI for Marketing, AI for Human Resources, and others.",
  },
  {
    question: "5. Is JAIN Online MBA recognized?",
    answer:
      "Yes. JAIN Online’s online degree programs are recognized by the University Grants Commission (UGC), while its MBA and MCA programs are approved by AICTE. The degree is awarded by JAIN (Deemed-to-be University).",
  },
];

export default function FaqSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 fa1-main">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-poppins lg:text-4xl font-semibold text-gray-900 mb-10">
            Frequently Asked <br className="hidden md:block" />
            Questions
          </h2>

          <div className="text-white p-8 rounded-lg max-w-md bg-[#194486]">
            <h3 className="text-xl font-semibold mb-2">
              Still having questions? <br />
              Reach out to Us
            </h3>

            <p className="text-sm text-gray-100 leading-relaxed mb-6">
              It is a long established fact that a reader will be distracted
              by the readable content.
            </p>

            <OpenFormButton className="bg-[#f8b236] text-[#194486] px-5 py-2.5 rounded-lg font-semibold transition hover:opacity-90">
              Apply Now
            </OpenFormButton>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col space-y-3 w-full">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg overflow-hidden bg-rose-50 open:bg-rose-100 transition-all"
            >
              <summary className="list-none cursor-pointer p-4 flex justify-between items-center gap-3">
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <svg
                  className="w-5 h-5 shrink-0 text-gray-700 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="px-4 pb-4 text-sm text-gray-700 font-semibold leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}