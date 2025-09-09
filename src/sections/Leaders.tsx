import direktur from '../assets/dosen/direktur.jpg'
import wadirAkdemik from '../assets/dosen/rosiyana.jpg'
import wadirMahasiswa from '../assets/dosen/andi.jpg'
import wadirKeuangan from '../assets/dosen/ibu-venti.jpg'


export default function Leaders() {
  const leaders = [
    {
      name: "Enggar, SST., M.Keb",
      role: "Direktur",
      image:direktur,
    },
    {
      name: "NI MADE ROSIYANA, S.ST., M.Keb",
      role: "Wakil Direktur Akademik",
      image: wadirAkdemik,
    },
    {
      name: "Andi,S.Kes,.MARS",
      role: "Wakil Direktur Kemahasiswaan",
      image: wadirMahasiswa    
    },
    {
      name: "SRIVENTI LESTARI, S.Tr.Keb.,MKM",
      role: "Wakil Direktur Keuangan",
      image: wadirKeuangan,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-wide">
          Pimpinan <span className="text-red-600">Kampus</span>
        </h2>

        {/* Grid Leaders */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition shadow-lg"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-700 group-hover:border-red-600 transition"
              />
              <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-red-500 transition">
                {leader.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}