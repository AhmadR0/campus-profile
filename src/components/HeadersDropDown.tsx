type Param = {
  hoverValue: string;
  style?: React.CSSProperties;
};

// Gabungkan semua item dan subitem menjadi satu daftar
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
  faculties: [
    "Program Studi D3 Kebidanan",
    "Program Studi D4 Manajemen Informasi Kesehatan",
    "Program Studi D4 Teknologi Laboratorium Medis"
  ],
  institutions: [
    "Lembaga",
    "Penjaminan Mutu",
    "Penelitian & Pengabdian Masyarakat",
    "UPT",
    "Pusat Teknologi Informasi dan Pangkalan Data",
    "Perpustakaan",
    "Pusat Bahasa",
    "Pusat",
    "Pusat Studi Gendre dan Anak"
  ],
  bureau: [
    "Biro AUPK",
    "Keuangan",
    "Kepegawaian",
    "Perencanaan",
    "Umum",
    "Biro AAKK",
    "Akademik",
    "Kemahasiswaan",
    "Kerjasama"
  ],
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
  agenda: [
    "Kalender Akademik",
    "Event Terbaru",
    "Seminar & Workshop",
    "Pengumuman"
  ]
};

export const DropDown = ({ hoverValue, style }: Param) => {
  const items = menuItems[hoverValue as keyof typeof menuItems] || [];

  return (
    <div className="absolute bg-black bg-opacity-90 text-white p-2 rounded-md shadow-lg z-50" style={style}>
      <div className="flex flex-row space-x-1">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};