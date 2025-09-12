type Param = {
  hoverValue: string;
  anchorRef: React.RefObject<HTMLAnchorElement | null>;
};

import { Link } from "react-router-dom";

const menuItems = {
  profile: [
    { label: "Pimpinan Polchen", path: "/profile/pimpinan-polchen" },
    { label: "Sejarah Polchen", path: "/profile/sejarah" },
    { label: "Lambang", path: "/profile/lambang" },
    { label: "Visi Misi & Tujuan", path: "/profile/visi-misi-tujuan" },
    { label: "Struktur Organisasi", path: "/profil/struktur-organisasi" },
    { label: "Quality Assurance", path: "/profil/quality-assurance" },
    { label: "Kerjasama Kemitraan", path: "/profil/kerjasama-kemitraan" },
    { label: "Dasar Hukum Pengelolaan", path: "/profil/dasar-hukum-pengelolaan" },
    { label: "Pedoman dan Panduan Pengelolaan", path: "/profil/pedoman-dan-panduan-pengelolaan" },
    { label: "Fasilitas Kampus", path: "/profil/fasilitas-kampus" },
    { label: "Peta Kampus", path: "/profil/peta-kampus" }
  ],
  faculties: [
    { label: "Syariah dan Hukum", path: "/fakultas/syariah-dan-hukum" },
    { label: "Tarbiyah dan Keguruan", path: "/fakultas/tarbiyah-dan-keguruan" },
    { label: "Ushuluddin dan Filsafat", path: "/fakultas/ushuluddin-dan-filsafat" }
  ],
  institutions: {
    LEMBAGA: [
      { label: "Penjaminan Mutu", path: "/lembaga/penjaminan-mutu" },
      { label: "Penelitian & Pengabdian Masyarakat", path: "/lembaga/penelitian-pengabdian-masyarakat" }
    ],
    UPT: [
      { label: "Pusat Teknologi Informasi dan Pangkalan Data", path: "/upt/pusat-teknologi-informasi-dan-pangkalan-data" },
      { label: "Perpustakaan", path: "/upt/perpustakaan" },
      { label: "Pusat Bahasa", path: "/upt/pusat-bahasa" }
    ],
    PUSAT: [
      { label: "Pusat Studi Gender dan Anak", path: "/pusat/pusat-studi-gender-dan-anak" },
      { label: "Pusat Pengembangan Bisnis", path: "/pusat/pusat-pengembangan-bisnis" }
    ],
    LAINNYA: [
      { label: "Satuan Pengawas Internal (SPI)", path: "/lainnya/satuan-pengawas-internal" },
      { label: "International Office (IO)", path: "/lainnya/international-office" },
      { label: "Pejabat Pengelola Informasi dan Dokumentasi (PPID)", path: "/lainnya/pejabat-pengelola-informasi-dan-dokumentasi" }
    ]
  },
  bureau: {
    AUPK: [
      { label: "Keungan", path: "/biro/aupk/keuangan" },
      { label: "Kepegawaian", path: "/biro/aupk/kepegawaian" },
      { label: "Perencanaan", path: "/biro/aupk/perencanaan" },
      { label: "Umum", path: "/biro/aupk/umum" }
    ],
    AAKK: [
      { label: "Akademik", path: "/biro/aakk/akademik" },
      { label: "Kemahasiswaan", path: "/biro/aakk/kemahasiswaan" },
      { label: "Kerjasama", path: "/biro/aakk/kerjasama" }
    ]
  },
  informationSystems: [
    { label: "SIAKAD", path: "/sistem-informasi/siakad" },
    { label: "SIMKEU", path: "/sistem-informasi/simkeu" },
    { label: "SIMPEG", path: "/sistem-informasi/simpeg" },
    { label: "SISTER", path: "/sistem-informasi/sister" }
  ],
  study: [
    { label: "Program Studi", path: "/studi/program-studi" },
    { label: "Beasiswa", path: "/studi/beasiswa" },
    { label: "Prosedur Pendaftaran", path: "/studi/prosedur-pendaftaran" },
    { label: "Biaya Pendidikan", path: "/studi/biaya-pendidikan" }
  ],
  agenda: [
    { label: "Kegiatan Kampus", path: "/agenda/kegiatan-kampus" },
    { label: "Kalender Akademik", path: "/agenda/kalender-akademik" }
  ]
};

export const DropDown = ({ hoverValue, anchorRef }: Param) => {
  const items = menuItems[hoverValue as keyof typeof menuItems];

  if (!items) return null;

  const isCategorized = typeof items === "object" && !Array.isArray(items);

  // Hitung posisi default (untuk kategori -> mega menu di tengah)
  const megaMenuStyle: React.CSSProperties = anchorRef?.current
    ? {
      position: "absolute",
      left: "50%",
      top: anchorRef.current.offsetHeight + 8, // pas di bawah nav
      transform: "translateX(-50%)",
    }
    : {
      position: "absolute",
      left: "50%",
      top: "100%",
      transform: "translateX(-50%)",
    };

  // Kalau ada anchorRef, taro di bawah nav terkait
  const simpleMenuStyle: React.CSSProperties = anchorRef?.current
    ? (() => {
      const rect = anchorRef.current!.getBoundingClientRect();
      return {
        position: "fixed",
        top: rect.bottom + 8, 
        left: rect.left - 10,
      };
    })()
    : megaMenuStyle;

  return (
    <div
      className={`
        absolute bg-white text-black p-4 rounded-md shadow-lg z-50
      transform transition-all duration-300 ease-out
      ${hoverValue ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
      `}
      style={isCategorized ? megaMenuStyle : simpleMenuStyle}
    >
      {isCategorized ? (
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${Object.keys(items).length}, minmax(150px, 1fr))`
          }}
        >
          {Object.entries(items).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-3 uppercase">{category}</h3>
              <ul className="space-y-2">
                {(links as { label: string, path: string }[]).map(({ label, path }, i) => (
                  <li key={i}>
                    <Link to={path} className="hover:text-blue-600 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {(items as { label: string, path: string }[]).map(({ label, path }, i) => (
            <li key={i}>
              <Link to={path} className="hover:text-blue-600 transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
