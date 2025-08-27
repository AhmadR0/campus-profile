import logo from '../assets/logo.png'
import { useState, useEffect } from "react";



export const HadersMain = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-black shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                    <span className="text-xl font-bold tracking-wide uppercase">
                        Politeknik Cendrawasih Palu
                    </span>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
                    <a href="#academics" className="hover:text-stone-500 transition-colors">
                        Academics
                    </a>
                    <a href="#admissions" className="hover:text-stone-500 transition-colors">
                        Admissions
                    </a>
                    <a href="#research" className="hover:text-stone-500 transition-colors">
                        Research
                    </a>
                    <a href="#about" className="hover:text-stone-500 transition-colors">
                        About
                    </a>
                </nav>

                {/* Mobile Burger */}
                <button className="md:hidden text-white focus:outline-none">
                    ☰
                </button>
            </div>
        </header>
    )

}