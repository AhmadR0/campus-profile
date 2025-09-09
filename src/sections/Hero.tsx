import videoBg from "../assets/video/VodeBaground.mp4";
import noise from '../assets/noise.png'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay: gradient + noise texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      <div
  className="absolute inset-0 opacity-20 mix-blend-overlay"
  style={{ backgroundImage: `url(${noise})` }}
/>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-wide drop-shadow-xl">
          Welcome to
          <br />
          <span className="text-white font-extrabold">
            Politeknik Chendrawasih
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-sans font-light tracking-wide opacity-90 text-stone-200">
          Explore knowledge, culture, and innovation.
        </p>
      </div>
    </section>
  );
}
