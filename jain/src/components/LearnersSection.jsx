import Image from "next/image";

const LOGOS = [
  "Artboard5.png",
  "Artboard7.png",
  "Artboard8.png",
  "Artboard9.png",
  "Artboard10.png",
  "Artboard11.png",
  "Artboard12.png",
  "Artboard13.png",
  "Artboard14.png",
  "Artboard15.png",
  "Artboard16.png",
];

export default function LearnersSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our learners works at
          </h3>
          <p className="text-lg mt-3 text-gray-600">
            Top hiring partners at Jain Online
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="border border-gray-100 h-20 flex items-center justify-center p-2"
            >
              <Image
                src={`/images/jain/${logo}`}
                alt="Company Logo"
                width={140}
                height={60}
                className="w-[85%] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
