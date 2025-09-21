import { useEffect } from "react";
import direktur from '../../../assets/dosen/direktur.jpg'

export default function PimpinanPolchen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const mantanDirektur = [
  //   {
  //     name: "Prof. Bambang Setiawan",
  //     image: "https://randomuser.me/api/portraits/men/45.jpg",
  //     periode: '2023-2024'
  //   },
  //   {
  //     name: "Dr. Siti Haryati",
  //     image: "https://randomuser.me/api/portraits/women/46.jpg",
  //     periode: '2023-2024'
  //   },
  //   {
  //     name: "Ir. Gunawan Putra",
  //     image: "https://randomuser.me/api/portraits/men/47.jpg",
  //     periode: '2023-2024'
  //   },
  //   {
  //     name: "Dr. Laila Mutiara",
  //     image: "https://randomuser.me/api/portraits/women/48.jpg",
  //     periode: '2023-2024'
  //   },
  // ];

  return (
    <div className="w-full">

      <section className="h-screen bg-black text-white flex items-center justify-center px-10">
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center pt-15">
          {/* Foto Pasangan */}
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/originals/1c/04/86/1c0486e95f44c4d6fee6e3ccffc59767.jpg"
              alt="Pendiri Yayasan"
              className="w-[450px] h-[550px] object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Deskripsi */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Pendiri Yayasan</h2>
            <p className="text-gray-300 leading-relaxed">
              Pasangan <b>dr. H. Cenrawasih</b> dan <b>Ny. Hj. Dewi Ratnasari</b>
              mendirikan Yayasan Politeknik Cenrawasih Palu pada tahun 1985.
              Mereka memiliki visi besar untuk mengembangkan pendidikan vokasi
              di Sulawesi Tengah agar generasi muda memiliki keterampilan yang
              unggul dan siap kerja.
            </p>
          </div>
        </div>
      </section>

      {/* === Section 2: Ketua Yayasan === */}
      <section className="h-screen bg-white text-black flex items-center justify-center px-10">
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* Foto Ketua Yayasan */}
          <div className="flex justify-center">
            <img
              src="https://media.gettyimages.com/id/200154583-001/photo/mature-female-doctor-sitting-in-leather-chair-portrait.jpg?s=1024x1024&w=gi&k=20&c=7BcW0J5mVuEDUmJjgO30nONZRzUqMZWqtc_xAC7uHRk="
              alt="Ketua Yayasan"
              className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Deskripsi */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Ketua Yayasan</h2>
            <p className="text-gray-600 leading-relaxed">
              <b>dr. Vivi Yanti Sp.JP (K), FIHA, FAsCC, MMedEd </b> saat ini menjabat sebagai Ketua Yayasan
              Politeknik Cenrawasih Palu. Beliau melanjutkan perjuangan para
              pendiri dengan fokus pada penguatan program vokasi dan kerjasama
              industri untuk meningkatkan kualitas lulusan.
            </p>
          </div>
        </div>
      </section>

      {/* === Section 3: Direktur === */}
      <section className="h-screen bg-black text-white flex flex-col items-center justify-center px-10">
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center pt-10">
          {/* Foto Direktur */}
          <div className="flex justify-center">
            <img
              src={direktur}
              alt="Direktur"
              className="w-[400px] h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Deskripsi + Mantan Direktur */}
          <div>
            {/* Deskripsi Direktur */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Direktur</h2>
              <p className="text-gray-300 leading-relaxed">
                <b>ENGGAR, SST., M.Keb.</b> adalah Direktur aktif Politeknik
                Cenrawasih Palu. Dengan pengalaman lebih dari 20 tahun di bidang
                pendidikan, beliau berkomitmen membawa kampus ini menuju standar
                internasional melalui inovasi kurikulum dan penelitian terapan.
              </p>
            </div>

            {/* Mantan Direktur */}
           

          </div>
        </div>
      </section>

    </div>
  );
}
