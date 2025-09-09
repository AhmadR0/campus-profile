type Param = {
  hoverValue: string;
  anchorRef: React.RefObject<HTMLAnchorElement | null>;
};

const menuItems = {
  profile: [
    "Pimpinan",
    "Sejarah Polchen",
    "Lambang",
    "Visi Misi & Tujuan",
    "Struktur Organisasi",
    "Quality Assurance",
    "Kerjasama Kemitraan",
    "Dasar Hukum Pengelolaan",
    "Pedoman dan Panduan Pengelolaan",
    "Fasilitas Kampus",
    "Peta Kampus"
  ],
  faculties: ["Syariah dan Hukum", "Tarbiyah dan Keguruan", "Ushuluddin dan Filsafat"],
  institutions: {
    LEMBAGA: ["Penjaminan Mutu", "Penelitian & Pengabdian Masyarakat"],
    UPT: ["Pusat Teknologi Informasi dan Pangkalan Data", "Perpustakaan", "Pusat Bahasa"],
    PUSAT: ["Pusat Studi Gender dan Anak", "Pusat Pengembangan Bisnis"],
    LAINNYA: ["Satuan Pengawas Internal (SPI)", "International Office (IO)", "Pejabat Pengelola Informasi dan Dokumentasi (PPID)"]
  },
  bureau: {
    AUPK:['Keungan','Kepegawaian','Perencanaan','Umum'],
    AAKK:['Akademik','Kemahasiswaan','Kerjasama']
  },
  informationSystems: [
    "SIAKAD",
    "SIMKEU",
    "SIMPEG",
    "SISTER"
  ],
  study: [
    "Program Studi",
    "Beasiswa",
    "Prosedur Pendaftaran",
    "Biaya Pendidikan"
  ],
  agenda: ["Kegiatan Kampus", "Kalender Akademik"]
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
        top: rect.bottom + 8, // 8px di bawah anchor
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
                {(links as string[]).map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {(items as string[]).map((link, i) => (
            <li key={i}>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
