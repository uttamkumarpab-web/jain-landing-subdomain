"use client";

import { useState } from "react";
import OpenFormButton from "./OpenFormButton";

const FAQS = [
  {
    question: "1. Are online degrees recognized by UGC?",
    answer:
      "Yes, the online degree programs from JAIN Online are recognized by the University Grants Commission (UGC). Moreover, our MBA and MCA programs are approved by AICTE.",
  },
  {
    question: "2. What types of online degree programs are offered by JAIN Online?",
    answer:
      "JAIN Online offers a variety of online degree programs, including the Online MBA, BBA, BCA, B.Com,MCA and M.Com.",
  },
  {
    question: "3. What is the mode of learning at JAIN Online?",
    answer:
      "Programs offered by JAIN Online are delivered in online mode with a strong focus on scheduled live sessions that enable real-time interaction with faculty and peers. In addition, learners receive 24×7 access to self-learning resources and pre-recorded lectures through the Learning Management System (LMS), which can be accessed seamlessly across devices.",
  },
  {
    question: "4. What is the duration of the programs offered by JAIN Online?",
    answer:
      "The duration of JAIN Online programs generally ranges from 2 to 4 years, depending on the program and level of study. Most postgraduate programs, such as online MBA programs, are typically completed in 2 years, while undergraduate programs generally have a duration of 3 to 4 years.",
  },
  {
    question: "5. Whether the degree acquired through distance mode is equivalent to the degree acquired through regular mode?",
    answer:
      "Yes, the degrees acquired through distance mode from JAIN Online are recognized and considered equivalent to those obtained through regular on-campus programs, as they are awarded by the same university and meet the same academic standards.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 fa1-main">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-start">
        <div>
          <h2 className="text-2xl font-poppins lg:text-4xl font-semibold text-gray-900 mb-10">
            Frequently Asked <br className="hidden md:block" />
            Questions
          </h2>
          <div
            className="text-white p-8 rounded-lg max-w-md bg-[#194486]">
            <h3 className="text-xl font-semibold mb-2">
              Still having questions? <br />
              Reach out to Us
            </h3>
            <p className="text-sm text-gray-100 leading-relaxed mb-6">
              It is a long established fact that a reader will be distracted by the readable
              content.
            </p>
            <OpenFormButton className="bg-[#f8b236] text-[#194486] px-5 py-2.5 rounded-lg font-semibold transition hover:opacity-90">
                          Apply Now
                        </OpenFormButton>
          </div>
        </div>

        <div className="flex flex-col space-y-3 w-full">
          {FAQS.map((faq, faqIndex) => {
            const isOpen = openIndex === faqIndex;
            return (
              <div
                key={faq.question}
                className={`${isOpen ? "bg-rose-100" : "bg-rose-50"} rounded-lg overflow-hidden transition-all`}
              >
                <button
                  type="button"
                  className="w-full text-left p-4 flex justify-between items-center gap-3 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : faqIndex)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-700 font-semibold">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
