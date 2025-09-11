export default function Highlights() {
  const highlights = [
    {
      title: "Research Excellence",
      description: "Explore groundbreaking research across diverse disciplines.",
      image:
        "https://asset.kompas.com/crops/yRxjfkPH8ZiBTAWSrsM4Laparr0=/0x475:1200x1275/1200x800/data/photo/2020/12/22/5fe2089dd6aba.jpeg",
    },
    {
      title: "Student Life",
      description: "Engage in vibrant campus activities and communities.",
      image:
        "https://miitel.com/id/wp-content/uploads/elementor/thumbs/IMG_0046-qc1sg6qg2h2kal82s0n5srfihllepqw0ozrnxqd5bk.png",
    },
    {
      title: "Global Impact",
      description: "Join initiatives shaping the future worldwide.",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2025/08/02/pt-pertamina-persero-melalui-tim-ekosilika-meraih-penghargaan-top-6-innovators-di-indonesia-dalam-gelaran-sdg-innovation-accel-1754119219314_169.jpeg?w=650",
    },
    {
      title: "Innovation & Technology",
      description: "Discover how technology drives education forward.",
      image:
        "https://assetd.kompas.id/prAcx8-5DxjDm-ZGSXq9-WCIQN8=/fit-in/1024x720/filters:format(webp):quality(80)/https://asset.kgnewsroom.com/photo/pre/2023/06/26/504fe140-2241-49c0-a5b9-e71cc8e3880c_jpg.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white tracking-wide">
          Highlights <span className="text-red-500">Kampus</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-700 transition group"
            >
              {/* Gambar */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-500 transition">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
