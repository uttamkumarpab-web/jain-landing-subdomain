import Image from "next/image";

const RANKINGS = [
  {
    img: "/images/jain/ksurf.jpg",
    text: "Awarded 5 Stars by KSURF",
  },
  {
    img: "/images/jain/rank1.png",
    text: "QS World University Ranking.",
  },
  {
    img: "/images/jain/rank2.png",
    text: "NIRF Ranking: Ranked 85th In India",
  },
  {
    img: "/images/jain/rank3.png",
    text: "UGC- JAIN has been awarded Graded Autonomy by UGC",
  },
];

export default function RankingsSection() {
  return (
    <section className="py-16 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            JAIN University Rankings & Accreditations
          </h3>
          <p className="text-lg mt-3 text-gray-600">
            How about getting a degree from the top ranked university?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RANKINGS.map((r, i) => (
            <div
              key={i}
              className="bg-white p-3 text-center border border-gray-100 rounded-lg shadow-sm"
            >
              <div className="mx-auto mb-2 w-[100px]">
                <Image
                  src={r.img}
                  alt="Approval"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <p className="mb-0 text-gray-700 text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
