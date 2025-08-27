export default function Stats() {
  const stats = [
    { value: "3,200+", label: "Mahasiswa Aktif" },
    { value: "6", label: "Program Studi" },
    { value: "120+", label: "Publikasi Riset" },
    { value: "5,000+", label: "Alumni" },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Pencapaian Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-blue-600">
                {stat.value}
              </span>
              <span className="mt-2 text-lg text-gray-700">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
