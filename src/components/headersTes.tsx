import logo from '../assets/logo.png'
import logoYayasan from '../assets/Logo_Yayasan.png'
import { useState, useEffect, useRef } from "react";

export const HeaderMain = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        
        // Menutup dropdown saat klik di luar
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Data dropdown untuk setiap menu
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
            "Fakultas Teknik",
            "Fakultas Ekonomi",
            "Fakultas Hukum",
            "Fakultas Kedokteran",
            "Fakultas Pertanian"
        ],
        institutions: [
            "Lembaga Penelitian",
            "Lembaga Pengabdian Masyarakat",
            "Lembaga Penjaminan Mutu",
            "Lembaga Kemahasiswaan"
        ],
        bureau: [
            "Biro Akademik",
            "Biro Keuangan",
            "Biro Umum",
            "Biro Kemahasiswaan"
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

    const handleDropdownToggle = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center z-60">
                    <img
                        src={logo}
                        alt="Logo"
                        width={scrolled ? 50 : 60}
                        height={scrolled ? 50 : 60}
                        className="object-contain transition-all duration-300"
                    />
                    <img 
                        src={logoYayasan} 
                        alt= 'yayasan'
                        width={scrolled ? 32 : 42}
                        height={scrolled ? 32 : 42}
                        className="object-contain transition-all duration-300" 
                    />
                </div>

                {/* Nav Links - Center */}
                <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
                
                    
                    {/* PROFILE Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('profile')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('profile')}
                        >
                            PROFILE
                        </button>
                        
                        {activeDropdown === 'profile' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.profile.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* FAKULTAS Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('faculties')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('faculties')}
                        >
                            FAKULTAS
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {activeDropdown === 'faculties' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.faculties.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* LEMBAGA Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('institutions')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('institutions')}
                        >
                            LEMBAGA
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {activeDropdown === 'institutions' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.institutions.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* BIRO Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('bureau')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('bureau')}
                        >
                            BIRO
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {activeDropdown === 'bureau' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.bureau.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* SISTEM INFORMASI Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('informationSystems')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('informationSystems')}
                        >
                            SISTEM INFORMASI
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {activeDropdown === 'informationSystems' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.informationSystems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* KULIAH DI POLCHEN Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('study')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('study')}
                        >
                            KULIAH DI POLCHEN
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {activeDropdown === 'study' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.study.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* AGENDA Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('agenda')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button 
                            className="hover:text-stone-300 transition-colors px-1 py-1 flex items-center"
                            onClick={() => handleDropdownToggle('agenda')}
                        >
                            AGENDA
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {activeDropdown === 'agenda' && (
                            <div 
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50"
                            >
                                {menuItems.agenda.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Right Section - Search and Language */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-white hover:text-stone-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <div className="h-6 border-l border-gray-400"></div>
                    <button className="text-white hover:text-stone-300 transition-colors text-sm font-medium">
                        ID | EN
                    </button>
                </div>

                {/* Mobile Burger */}
                <button 
                    className="lg:hidden text-white focus:outline-none z-60"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-center h-full space-y-6 overflow-y-auto py-10">
                        
                        
                        {/* Mobile Profile Dropdown */}
                        <div className="w-full text-center">
                            <button 
                                className="text-white text-xl font-semibold hover:text-stone-300 transition-colors"
                                onClick={() => setActiveDropdown(activeDropdown === 'profile' ? null : 'profile')}
                            >
                                PROFILE {activeDropdown === 'profile' ? '▲' : '▼'}
                            </button>
                            {activeDropdown === 'profile' && (
                                <div className="mt-2 space-y-3">
                                    {menuItems.profile.map((item, index) => (
                                        <a
                                            key={index}
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block text-gray-300 text-lg hover:text-white"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* Repeat for other menu items in mobile view */}
                        <a href="#faculties" className="text-white text-xl font-semibold hover:text-stone-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            FAKULTAS
                        </a>
                        <a href="#institutions" className="text-white text-xl font-semibold hover:text-stone-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            LEMBAGA
                        </a>
                        <a href="#bureau" className="text-white text-xl font-semibold hover:text-stone-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            BIRO
                        </a>
                        <a href="#information-systems" className="text-white text-xl font-semibold hover:text-stone-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            SISTEM INFORMASI
                        </a>
                        <a href="#study" className="text-white text-xl font-semibold hover:text-stone-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            KULIAH DI POLCHEN
                        </a>
                        <a href="#agenda" className="text-white text-xl font-semibold hover:text-stone-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            AGENDA
                        </a>
                        
                        <div className="flex items-center gap-6 mt-6">
                            <button className="text-white hover:text-stone-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="text-white hover:text-stone-300 transition-colors text-base font-medium">
                                ID | EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}