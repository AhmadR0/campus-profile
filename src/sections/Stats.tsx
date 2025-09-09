import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const stats = [
    { value: 3200, suffix: "+", label: "Mahasiswa Aktif" },
    { value: 6, suffix: "", label: "Program Studi" },
    { value: 120, suffix: "+", label: "Publikasi Riset" },
    { value: 5000, suffix: "+", label: "Alumni" },
  ];

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // hanya sekali jalan
    threshold: 0.3, // jalan saat 30% elemen kelihatan
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white tracking-wide">
          Pencapaian <span className="text-red-500">Kami</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg transition hover:scale-105 hover:bg-white/5"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </span>
              <span className="mt-3 text-lg text-gray-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
