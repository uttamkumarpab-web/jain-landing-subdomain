import Link from "next/link";
import ConversionTracker from "@/components/ConversionTracker";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";

export const metadata = {
  title: "Thank You | JAIN Online Degree",
  description:
    "Your enquiry for the JAIN Online Degree Programme has been received successfully.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50">
        <div className="bg-white text-gray-800 rounded-3xl shadow-lg max-w-md w-full text-center px-8 py-12">
          <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
            <svg
              className="w-10 h-10 text-green-600"
              viewBox="0 0 512 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 0 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 0 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#194486] mb-3">Thank You!</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Your enquiry for the JAIN Online Degree Programme has been received
            successfully. A confirmation email has been sent to your email ID,
            and our admissions counsellor will get back to you soon.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 w-[250px] max-sm:w-full bg-[#194486] text-white font-medium py-2 px-4 rounded transition duration-300 hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <FooterSection />
      <ConversionTracker />
    </>
  );
}
