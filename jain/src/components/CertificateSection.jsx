import Image from "next/image";

const BENEFITS = [
  "UGC-Entitled",
  "Degrees from a Globally Ranked University",
  "Universally Accepted in India and Abroad",
  "Equivalent to Jain's On-Campus Programme Degrees",
];

export default function CertificateSection() {
  return (
    <section className="py-16 px-4 text-white bg-gradient-to-r from-[#004993] to-[#003060]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <Image
            src="/images/jain/Certificate.jpg"
            alt="Certificate"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:pl-6">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Online MBA Degree from Jain University
            </h3>
          </div>
          <h6 className="mb-4 font-bold text-lg">Benefits of Jain Online</h6>
          <ul className="border-l-2 pl-4 space-y-3 text-sm">
            {BENEFITS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
