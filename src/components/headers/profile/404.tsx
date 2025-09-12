// import React from "react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-4">
      {/* SVG Konstruksi */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-48 w-48 text-red-600 mb-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Ikon konstruksi / gear + tools */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 6.75a4.5 4.5 0 016.364 6.364l-1.06 1.06a1.5 1.5 0 00-.293 1.657l.74 1.48a1.5 1.5 0 01-1.342 2.189h-1.518a1.5 1.5 0 00-1.342.83l-.74 1.48a1.5 1.5 0 01-2.678 0l-.74-1.48a1.5 1.5 0 00-1.342-.83H6.64a1.5 1.5 0 01-1.342-2.189l.74-1.48a1.5 1.5 0 00-.293-1.657l-1.06-1.06a4.5 4.5 0 016.364-6.364l.121.121a1.5 1.5 0 002.122 0l.121-.121z"
        />
      </svg>

      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wide">
        Halaman Ini Belum Tersedia
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-400 max-w-xl mb-8">
        Kami masih dalam proses mengembangkan halaman ini agar lebih lengkap
        dan bermanfaat. Terima kasih atas kesabaran Anda.
      </p>

      {/* Tombol */}
      <a
        href="/"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors font-medium"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
