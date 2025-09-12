// import React from "react";

export default function Sejarah() {
    const timeline = [
        {
            year: "1960",
            title: "Berdirinya Kampus",
            desc: "Kampus ini didirikan pada tahun 1960 sebagai lembaga pendidikan tinggi pertama di daerah.",
            img: "https://via.placeholder.com/500x300",
        },
        {
            year: "1980",
            title: "Fakultas Pertama",
            desc: "Pembukaan fakultas pertama menjadi tonggak penting dalam perjalanan kampus.",
            img: "https://via.placeholder.com/500x300",
        },
        {
            year: "2000",
            title: "Pindah ke Gedung Baru",
            desc: "Kampus berpindah ke gedung utama yang lebih luas untuk mendukung kegiatan akademik.",
            img: "https://via.placeholder.com/500x300",
        },
        {
            year: "2020",
            title: "Menjadi Universitas",
            desc: "Resmi berubah status menjadi universitas dengan beragam fakultas dan program studi.",
            img: "https://via.placeholder.com/500x300",
        },
    ];

    return (
        <div className="w-full">
            {/* HERO (HITAM) */}
            <section className="relative h-[400px] flex items-center justify-center bg-black text-white">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
                        Sejarah Kampus
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Perjalanan panjang sejak 1960 hingga kini, membangun generasi untuk
                        masa depan.
                    </p>
                </div>
            </section>

            {/* TIMELINE (PUTIH) */}
            {/* TIMELINE (PUTIH) */}
            <section className="w-full bg-white text-gray-900 py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Perjalanan Kami
                    </h2>
                    <div className="relative border-l-4 border-blue-600 pl-8">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="mb-16 relative">
                                {/* Bullet */}
                                <div className="absolute -left-[1.4rem] w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">{idx + 1}</span>
                                </div>

                                {/* Card */}
                                <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:scale-[1.02] transition-transform">
                                    <h3 className="text-2xl font-semibold text-blue-600">
                                        {item.year}
                                    </h3>
                                    <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                                    <p className="text-gray-700 mt-2">{item.desc}</p>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="mt-4 rounded-lg w-full object-cover max-h-64"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MILESTONES (HITAM) */}
            <section className="bg-black text-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Milestones Penting
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {timeline.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-900 rounded-xl border border-gray-700 p-6 text-center hover:border-blue-500 transition-colors"
                            >
                                <h3 className="text-2xl font-extrabold text-blue-400">
                                    {item.year}
                                </h3>
                                <p className="text-gray-300 font-medium mt-2">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEXT SECTION (PUTIH, contoh tambahan) */}
        </div>
    );
}
