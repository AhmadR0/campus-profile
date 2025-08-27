import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footers() {
  return (
    <footer className="bg-black text-stone-300 pt-12 pb-6 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Polcen</h2>
          <div className="space-y-2 text-sm">
            <p>JL Cendrawasih, 44, Palu, 94117</p>
            <p>Kota Palu, Sulawesi Tengah 94111</p>
            <p className="mt-3">
              <strong>Phone:</strong> +62 853-4077-6861
            </p>
            <p>
              <strong>Email:</strong> politeknikcendrawasih44@gmail.com
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">About us</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Terms of service</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500 transition-colors">Konsultasi akademik</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Layanan tugas akhir</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Layanan Surat keterangan</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Akses sistem akademik</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <p className="text-sm mb-4">
            Dapatkan informasi terbaru seputar kegiatan akademik, pengumuman penting, prestasi mahasiswa, dan event menarik lainnya dengan mengikuti akun resmi media sosial kami!
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-stone-800 pt-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} <strong className="text-white px-1">Ahmad Radifa</strong> All Rights Reserved
      </div>
    </footer>
  );
}