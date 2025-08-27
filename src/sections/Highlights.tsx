
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
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
