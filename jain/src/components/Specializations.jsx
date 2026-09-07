"use client";

import { useState } from "react";

const SPECIALIZATIONS = [
  {
    name: "Finance and Marketing",
    overview:
      "Build expertise across financial decision-making, marketing strategy, consumer behaviour and business growth.",
    skills:
      "Financial Management, Marketing Strategy, Consumer Behaviour, Business Economics, Brand Management",
    careers:
      "Finance Manager, Marketing Manager, Business Development Manager, Brand Manager, Business Consultant",
    industries:
      "Banking, Financial Services, Consulting, FMCG, E-commerce, Technology",
    demand:
      "Suitable for professionals looking to combine financial understanding with marketing and commercial decision-making.",
  },
  {
    name: "Human Resource Management",
    overview:
      "Develop knowledge of employee management, talent development, organisational behaviour and HR practices.",
    skills:
      "Talent Management, Recruitment, Performance Management, Employee Relations, HR Analytics",
    careers:
      "HR Manager, Talent Acquisition Manager, HR Business Partner, Learning & Development Manager",
    industries:
      "IT, Consulting, BFSI, Healthcare, Manufacturing, Retail",
    demand:
      "A strong choice for professionals interested in people management, talent strategy and organisational development.",
  },
  {
    name: "Marketing",
    overview:
      "Develop marketing knowledge covering customer behaviour, branding, digital channels and business growth.",
    skills:
      "Marketing Strategy, Consumer Behaviour, Brand Management, Digital Marketing, Market Research",
    careers:
      "Marketing Manager, Brand Manager, Digital Marketing Manager, Product Marketing Manager",
    industries:
      "FMCG, E-commerce, Technology, Retail, Media, Consulting",
    demand:
      "Suitable for professionals seeking careers in marketing, branding, sales and customer-focused business functions.",
  },
  {
    name: "Business Intelligence and Analytics",
    overview:
      "Learn how business data and analytical methods can support strategic and operational decision-making.",
    skills:
      "Business Analytics, Data Interpretation, Data Visualisation, Predictive Analysis, Decision Making",
    careers:
      "Business Analyst, BI Analyst, Data Analyst, Analytics Consultant, Strategy Analyst",
    industries:
      "IT, Consulting, BFSI, E-commerce, Retail, Technology",
    demand:
      "Suitable for professionals who want to combine management knowledge with data-driven business decision-making.",
  },
  {
    name: "General Management",
    overview:
      "Develop broad management capabilities across finance, marketing, operations, strategy and organisational functions.",
    skills:
      "Business Strategy, Leadership, Operations, Finance, Marketing, Decision Making",
    careers:
      "Business Manager, Operations Manager, Management Consultant, Strategy Manager",
    industries:
      "Consulting, Technology, Manufacturing, Retail, BFSI, Services",
    demand:
      "A broad management pathway for professionals who want flexibility across business functions.",
  },
  {
    name: "Human Resource Management and Finance",
    overview:
      "Combine people-management expertise with financial knowledge to understand both workforce and business performance.",
    skills:
      "HR Management, Financial Management, Talent Strategy, Business Finance, Organisational Behaviour",
    careers:
      "HR Manager, HR Business Partner, Finance Executive, People Operations Manager",
    industries:
      "IT, BFSI, Consulting, Healthcare, Manufacturing, Services",
    demand:
      "Useful for professionals interested in roles connecting people strategy with financial and business decisions.",
  },
  {
    name: "Marketing and Human Resource Management",
    overview:
      "Combine marketing and people-management capabilities for broader business and organisational responsibilities.",
    skills:
      "Marketing Strategy, HR Management, Consumer Behaviour, Talent Management, Brand Management",
    careers:
      "Marketing Manager, HR Manager, Brand Manager, Business Development Manager",
    industries:
      "FMCG, Retail, IT, E-commerce, Consulting, Services",
    demand:
      "Suitable for professionals seeking cross-functional exposure to marketing and human resource functions.",
  },
  {
    name: "Digital Marketing and e-Commerce",
    overview:
      "Focus on digital customer engagement, online business models, e-commerce and modern marketing practices.",
    skills:
      "Digital Marketing, E-commerce, SEO, Social Media Marketing, Customer Analytics, Online Branding",
    careers:
      "Digital Marketing Manager, E-commerce Manager, SEO Manager, Performance Marketing Manager",
    industries:
      "E-commerce, Technology, Retail, Media, FMCG, Startups",
    demand:
      "Relevant for professionals pursuing careers in digital-first businesses and online customer acquisition.",
  },
  {
    name: "Finance and Business Analytics",
    overview:
      "Combine financial management with analytical capabilities for data-driven financial and business decisions.",
    skills:
      "Financial Analysis, Business Analytics, Forecasting, Financial Modelling, Data Interpretation",
    careers:
      "Financial Analyst, Business Analyst, FP&A Analyst, Finance Manager, Analytics Consultant",
    industries:
      "BFSI, Consulting, FinTech, Technology, Investment, Corporate Finance",
    demand:
      "Suitable for finance professionals who want to strengthen their analytical and data-driven decision-making skills.",
  },
  {
    name: "Marketing and Business Analytics",
    overview:
      "Combine marketing expertise with analytics to understand customers, measure campaigns and support business growth.",
    skills:
      "Marketing Analytics, Consumer Insights, Data Visualisation, Digital Marketing, Market Research",
    careers:
      "Marketing Analyst, Marketing Manager, Consumer Insights Analyst, Business Analyst",
    industries:
      "E-commerce, FMCG, Retail, Technology, Media, Consulting",
    demand:
      "Suitable for professionals interested in combining marketing strategy with analytical decision-making.",
  },
  {
    name: "Supply Chain, Production and Operations Management",
    overview:
      "Build management capabilities across supply chains, production systems, logistics and business operations.",
    skills:
      "Operations Management, Supply Chain Planning, Logistics, Procurement, Inventory Management",
    careers:
      "Operations Manager, Supply Chain Manager, Logistics Manager, Procurement Manager",
    industries:
      "Manufacturing, Logistics, E-commerce, Retail, FMCG, Automotive",
    demand:
      "Suitable for professionals pursuing careers in operations, supply chain and logistics management.",
  },
  {
    name: "Human Resource and Business Analytics",
    overview:
      "Combine HR knowledge with analytics to support evidence-based workforce and talent decisions.",
    skills:
      "HR Analytics, Talent Management, Workforce Planning, Data Analysis, Performance Management",
    careers:
      "HR Analyst, People Analytics Manager, HR Business Partner, Talent Manager",
    industries:
      "IT, Consulting, BFSI, Healthcare, Technology, Services",
    demand:
      "Useful for professionals who want to apply data and analytics to modern HR and workforce decisions.",
  },
  {
    name: "AI for Finance",
    overview:
      "Explore the application of artificial intelligence and modern analytical approaches within financial functions.",
    skills:
      "Financial Analytics, AI Applications, Data Analysis, Risk Analysis, Financial Decision Making",
    careers:
      "Financial Analyst, FinTech Analyst, Risk Analyst, Finance Manager, Business Analyst",
    industries:
      "BFSI, FinTech, Investment, Consulting, Corporate Finance",
    demand:
      "Suitable for finance professionals looking to understand the growing role of AI and analytics in financial functions.",
  },
  {
    name: "Data Science and Artificial Intelligence",
    overview:
      "Develop management-oriented understanding of data science, artificial intelligence and data-driven business applications.",
    skills:
      "Data Analytics, AI Concepts, Machine Learning Fundamentals, Business Intelligence, Data Interpretation",
    careers:
      "Data Analyst, Business Analyst, AI Business Analyst, Analytics Consultant",
    industries:
      "Technology, Consulting, BFSI, E-commerce, Healthcare, Startups",
    demand:
      "Suitable for professionals looking to combine management education with emerging data and AI capabilities.",
  },
  {
    name: "AI for International Finance",
    overview:
      "Combine international finance knowledge with AI-driven approaches for modern financial decision-making.",
    skills:
      "International Finance, Financial Analytics, AI Applications, Risk Analysis, Global Markets",
    careers:
      "Financial Analyst, International Finance Analyst, Risk Analyst, FinTech Analyst",
    industries:
      "Global Banking, FinTech, Investment, Consulting, Financial Services",
    demand:
      "Suitable for professionals interested in international finance and technology-enabled financial functions.",
  },
  {
    name: "AI for Marketing",
    overview:
      "Explore how artificial intelligence can support marketing analysis, customer understanding and campaign decisions.",
    skills:
      "Marketing Analytics, AI Applications, Customer Insights, Digital Marketing, Campaign Analysis",
    careers:
      "Marketing Analyst, Digital Marketing Manager, Marketing Strategist, Customer Insights Analyst",
    industries:
      "E-commerce, Technology, FMCG, Retail, Media, Advertising",
    demand:
      "Suitable for marketers who want to develop technology-enabled and data-driven marketing capabilities.",
  },
  {
    name: "AI for Human Resources",
    overview:
      "Explore AI applications across talent acquisition, workforce analytics, employee management and HR decision-making.",
    skills:
      "HR Analytics, AI Applications, Talent Acquisition, Workforce Analytics, People Management",
    careers:
      "HR Analyst, People Analytics Manager, Talent Acquisition Manager, HR Business Partner",
    industries:
      "IT, Consulting, BFSI, Healthcare, Technology, Services",
    demand:
      "Suitable for HR professionals interested in using AI and analytics to improve people-related decisions.",
  },
  {
    name: "International Finance",
    overview:
      "Develop financial expertise for international markets, global financial reporting and cross-border business.",
    skills:
      "International Finance, Financial Reporting, Global Markets, Risk Management, Corporate Finance",
    careers:
      "Financial Analyst, Investment Analyst, Finance Manager, Risk Analyst, International Finance Specialist",
    industries:
      "Banking, Financial Services, Investment, Consulting, Multinational Corporations",
    demand:
      "Suitable for professionals targeting finance roles with an international or globally oriented business focus.",
  },
  {
    name: "Finance",
    overview:
      "Build a strong foundation in corporate finance, financial analysis, investment and strategic financial decision-making.",
    skills:
      "Financial Management, Corporate Finance, Investment Analysis, Financial Planning, Risk Management",
    careers:
      "Finance Manager, Financial Analyst, Investment Analyst, Financial Consultant, Risk Manager",
    industries:
      "Banking, NBFCs, Insurance, FinTech, Consulting, Corporate Finance",
    demand:
      "A suitable pathway for professionals targeting core finance and financial management roles.",
  },
];

export default function JainSpecializations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = SPECIALIZATIONS[activeIndex];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* SECTION HEADING */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            JAIN Online MBA Specializations
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-base md:text-lg">
            Choose an MBA elective that aligns with your career goals,
            professional interests and the business skills you want to develop.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-6 lg:gap-7 items-start">

          {/* LEFT SPECIALIZATION LIST */}
          <div className="max-h-[576px] overflow-y-auto overflow-x-hidden rounded-2xl bg-[#194486] shadow-sm">

            {SPECIALIZATIONS.map((specialization, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={specialization.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center gap-3 px-5 py-4 text-left transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#f8b236] text-white"
                        : "bg-[#194486] text-white hover:bg-[#234f96]"
                    }
                    ${
                      index !== SPECIALIZATIONS.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }
                  `}
                >
                  {/* NUMBER */}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold
                      ${
                        isActive
                          ? "bg-white text-[#194486]"
                          : "bg-white/10 text-white"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm md:text-[15px] font-semibold leading-snug">
                    {specialization.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAILS */}
          <div className="min-w-0">

            <h3 className="text-xl md:text-2xl font-bold text-[#194486] mb-5">
              {active.name}
            </h3>

            <div className="overflow-hidden rounded-2xl border border-gray-200">

              {/* TABLE HEADER */}
              <div className="grid grid-cols-[180px_1fr] md:grid-cols-[280px_1fr] bg-[#194486] text-white">
                <div className="px-5 py-4 font-bold">
                  Field
                </div>

                <div className="px-5 py-4 font-bold">
                  Details
                </div>
              </div>

              {/* OVERVIEW */}
              <DetailRow
                label="Overview"
                value={active.overview}
              />

              {/* SKILLS */}
              <DetailRow
                label="Skills You Can Develop"
                value={active.skills}
              />

              {/* CAREER */}
              <DetailRow
                label="Career Opportunities"
                value={active.careers}
              />

              {/* INDUSTRIES */}
              <DetailRow
                label="Industries"
                value={active.industries}
              />

              {/* FUTURE DEMAND */}
              <DetailRow
                label="Career Relevance"
                value={active.demand}
                last
              />
            </div>

            {/* MOBILE NAVIGATION */}
            <div className="flex items-center justify-between mt-5 lg:hidden">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? SPECIALIZATIONS.length - 1
                      : activeIndex - 1
                  )
                }
                className="rounded-lg border border-[#194486] px-4 py-2 text-sm font-semibold text-[#194486]"
              >
                ← Previous
              </button>

              <span className="text-sm font-semibold text-gray-500">
                {activeIndex + 1} / {SPECIALIZATIONS.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === SPECIALIZATIONS.length - 1
                      ? 0
                      : activeIndex + 1
                  )
                }
                className="rounded-lg bg-[#194486] px-4 py-2 text-sm font-semibold text-white"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* DETAIL ROW */
function DetailRow({ label, value, last = false }) {
  return (
    <div
      className={`grid grid-cols-[180px_1fr] md:grid-cols-[280px_1fr] ${
        !last ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="flex items-center bg-[#fffaf1] px-5 py-5 font-bold text-sm md:text-base text-gray-900">
        {label}
      </div>

      <div className="px-5 py-5 text-sm md:text-base leading-relaxed text-gray-700">
        {value}
      </div>
    </div>
  );
}