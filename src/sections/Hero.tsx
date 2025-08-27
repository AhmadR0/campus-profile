import backgroundImage from "../assets/Baground.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Our Campus
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore knowledge, culture, and innovation.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Explore Programs
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-lg transition">
            Visit Campus
          </button>
        </div>
      </div>
    </section>
  );
}
