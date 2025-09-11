// import React from "react";

export default function News() {
  const newsData = {
    "Berita Terbaru": [
      {
        title: "Launching Gedung Baru",
        date: "5 Sept 2025",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Kerjasama Politeknik dengan Industri",
        date: "3 Sept 2025",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaDpOK7ZqjY8qEagNTulXSoLW7yHSyQdbzu5wQWUL89fLtFQZuYrPd8tSiKbfylyvnc8&usqp=CAU",
      },
      {
        title: "Mahasiswa Magang ke Jepang",
        date: "1 Sept 2025",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Penerimaan Mahasiswa Baru 2025",
        date: "28 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=60",
      },
    ],
    "Pengabdian Masyarakat": [
      {
        title: "Bakti Sosial di Desa Binaan",
        date: "25 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Pelatihan UMKM Digital Marketing",
        date: "20 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Donasi Buku ke Sekolah Terpencil",
        date: "18 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Program Beasiswa Anak Desa",
        date: "15 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
      },
    ],
    "Pendidikan & Pengajaran": [
      {
        title: "Workshop Kurikulum Merdeka Belajar",
        date: "22 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Pelatihan Dosen E-Learning",
        date: "19 Agustus 2025",
        image:
          "https://www.gamelab.id/uploads/modules/NEWS/3901/Banner%20Image%20Artikel%20Gamelab%20-%202024-12-05T111257.319.jpg?1733393101527",
      },
      {
        title: "Pengembangan Modul Digital",
        date: "16 Agustus 2025",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpp792NlRtZyiDuiZCw25cvNQDUCIM6a6QQ&s",
      },
      {
        title: "Inovasi Metode Pembelajaran Hybrid",
        date: "12 Agustus 2025",
        image:
          "https://www.its.ac.id/news/wp-content/uploads/sites/2/2024/09/bersama-para-peserta.jpg",
      },
    ],
    "Penelitian & Pengembangan": [
      {
        title: "Riset Energi Terbarukan",
        date: "10 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Publikasi Jurnal Internasional",
        date: "8 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Konferensi Nasional Riset AI",
        date: "5 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Pengembangan Aplikasi Smart Campus",
        date: "2 Agustus 2025",
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=60",
      },
    ],
    "Organisasi & Tata Kelola": [
      {
        title: "Rektor Baru Resmi Dilantik",
        date: "30 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Audit Internal Tahunan",
        date: "25 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Workshop Manajemen Kampus",
        date: "20 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Peluncuran Sistem Administrasi Online",
        date: "18 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=60",
      },
    ],
    "Pengembangan Mahasiswa & Karir": [
      {
        title: "Job Fair 2025",
        date: "12 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Pelatihan Soft Skill Leadership",
        date: "10 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Kompetisi Startup Mahasiswa",
        date: "7 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=60",
      },
      {
        title: "Program Internship Bersama BUMN",
        date: "5 Juli 2025",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=60",
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Berita & Informasi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(newsData).map(([category, items], i) => (
            <div key={i}>
              <h3 className="text-lg font-bold uppercase mb-4 text-gray-800 border-b pb-2">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800 hover:text-red-600 transition line-clamp-2">
                        {item.title}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 mr-1 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
