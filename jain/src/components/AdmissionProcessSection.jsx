const STEPS = [
  {
    title: "Step 1",
    text: "Choose the Online Degree Program of your Choice by filling the Application form.",
  },
  {
    title: "Step 2",
    text: "Talk to our Counselors to get detailed programme information.",
  },
  {
    title: "Step 3",
    text: "Enter personal details, Fill the form and submit the fee.",
  },
  {
    title: "Step 4",
    text: "Get access to Your Learning Management system and all the resources required.",
  },
];

export default function AdmissionProcessSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Jain Online MBA Admission 2026
        </h2>
        <div className="mt-8 bg-white flex flex-col md:flex-row gap-6 p-5 rounded-xl shadow">
          {STEPS.map((s) => (
            <div key={s.title} className="flex-1 text-center relative">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#003060] bg-white font-semibold text-[#003060]">
                {s.title.split(" ")[1]}
              </span>
              <p className="text-sm text-gray-600 mt-3">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
