  import dir from '../assets/dosen/ibu_dir.jpg'
  import akd from '../assets/dosen/ibu_oca.jpg'
  import keu from '../assets/dosen/ibu_venti.jpg'
  import kmh from '../assets/dosen/andi.jpg'

export default function Faculty() {
  const staff = [
    // {
    //   name: "prof anna feronika Pont",
    //   role: "Ketua Yayasan",
    //   field: "ketua YayasanBeliau memimpin dan mengarahkan seluruh kegiatan yayasan agar berjalan sesuai dengan visi dan misi yang telah ditetapkan. Dengan pengalaman dan dedikasi yang dimiliki, beliau berperan penting dalam pengambilan keputusan strategis, serta menjadi representasi yayasan dalam menjalin hubungan dengan pemerintah, mitra, dan masyarakat.",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuy5Qo6a4S6VV_v3reyKJklcmhjGQFe5n4Q&s",
    // },
    {
      name: "Enggar, SST.,M.Keb",
      role: "Direktur",
      field: "Beliau memimpin pelaksanaan operasional sehari-hari, mulai dari pengelolaan program, pengembangan sumber daya, hingga memastikan seluruh kegiatan berjalan sesuai dengan visi, misi, dan kebijakan yayasan. Dengan kepemimpinan yang visioner, beliau berkomitmen untuk meningkatkan kualitas layanan serta menjalin kerja sama dengan berbagai pihak demi kemajuan yayasan.",
      image: dir,
    
    },
    {
      name: "Ni Made Rosiyana, SST.,M.Keb",
      role: "Wakil direktur, Bagian Akademik",
      field: "Beliau bertanggung jawab mengelola dan mengawasi seluruh kegiatan akademik, termasuk perencanaan kurikulum, proses pembelajaran, serta peningkatan mutu pendidikan. Dengan komitmen yang kuat, beliau berperan penting dalam menjaga kualitas akademik agar sesuai dengan standar yang telah ditetapkan.",
      image: akd,
    },
    {
      name: "Sriventi Lestari, S.Tr.Keb.,MKM",
      role: "Wakil direktur, Bidang Keuangan",
      field: "Beliau bertanggung jawab dalam pengelolaan keuangan, perencanaan anggaran, serta memastikan transparansi dan akuntabilitas dalam setiap kegiatan keuangan institusi. Dengan pengelolaan yang baik, beliau berperan mendukung keberlangsungan operasional dan pengembangan institusi.",
      image: keu,
    },
       {
      name: "Andi, S.Kes.,MARS",
      role: "Wakil direktur, Bidang Kemahasiswaan",
      field: "Beliau bertanggung jawab dalam pembinaan, pengembangan, dan pelayanan mahasiswa, termasuk kegiatan organisasi, minat dan bakat, serta kesejahteraan mahasiswa. Dengan peran ini, beliau berkomitmen menciptakan lingkungan kampus yang mendukung prestasi akademik maupun non-akademik mahasiswa.",
      image: kmh,
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
        Pimpinan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {staff.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl text-black font-semibold">{person.name}</h3>
              <p className="text-sm text-black">{person.role}</p>
              <p className="text-sm text-gray-600 mt-1">{person.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
