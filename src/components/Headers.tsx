import logo from '../assets/logo.png';
import logoYayasan from '../assets/Logo_Yayasan.png';
import { useState, useEffect } from "react";
import { DropDown } from './HeadersDropDown';

export const HeaderMain = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed flex items-center w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'
                }`}
        >
            {/* Logo Section (Left) */}
            <div className="flex items-center space-x-2 p-4">
                <img
                    src={logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                <img
                    src={logoYayasan}
                    alt="Yayasan Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
            </div>

            {/* Navigation (Center) */}
            <nav className="flex-1 flex justify-center relative">
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 p-4 md:p-0`}>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("profile")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Profil
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("faculties")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Fakultas
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("institutions")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Lembaga
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("bureau")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Biro
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("informationSystems")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Sistem Informasi
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("study")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Kuliah di UIN
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-stone-300 transition-colors block md:inline-block"
                        onMouseEnter={() => setHoveredMenu("agenda")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        Agenda
                    </a>
                </div>
            </nav>


            {hoveredMenu && (
                <DropDown
                    hoverValue={hoveredMenu}
                    style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '0.5rem' }}
                />
            )}

            {/* Search & Language Icons (Right) */}
            <div className="flex items-center space-x-4 p-4">
                <button className="text-white hover:text-stone-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className="text-white hover:text-stone-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
                {/* Mobile Burger Menu Button */}
                <button
                    className="md:hidden text-white hover:text-stone-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 p-4">
                    <div className="flex flex-col h-full justify-between">
                        {/* Header Section */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                                <img
                                    src={logoYayasan}
                                    alt="Yayasan Logo"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                            <button
                                className="text-white hover:text-stone-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Section */}
                        <nav className="flex flex-col space-y-4">
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Profile ▼</a>
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Fakultas</a>
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Lembaga</a>
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Biro</a>
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Sistem Informasi</a>
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Kuliah di Polchen</a>
                            <a href="#" className="text-white text-lg hover:text-stone-300 transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>Agenda</a>
                        </nav>

                        {/* Search & Language Section */}
                        <div className="flex items-center space-x-4 mt-auto">
                            <button className="text-white hover:text-stone-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="text-white hover:text-stone-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};