import React, { useState } from "react";
import { Link } from "react-scroll";
import { TfiAlignRight } from "react-icons/tfi";

const Navbar=()=>{
    const [menu, setMenu]= useState(false);
    const handleToggle=()=>{
        setMenu(!menu)
    }
    return (
        <div>
            <div className="flex flex-row justify-between right-0 left-0 top-0 p-5 md:px-32 bg-white shadow-[_3px_10px_rgba(0,0,0,0.1)]">
                {/* Logo */}
                <div>
                    <Link className="text-semibold text-2xl p-1 cursor-pointer jasaku text-brigtGreen font-semibold" to="/">
                    Jasaku
                    </Link>
                </div>
                
                {/* Navlink  Desktop*/}
                <nav className="hidden md:flex lg:flex gap-5 font-medium p-1 cursor-pointer">
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="home">Branda</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="tentang">Tentang</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="teknologi">Teknologi</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="project">Projek</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="kontak">Kontak </Link>
                </nav>
                {/* Navtoggle */}
                <div className="flex md:hidden lg:hidden" onClick={handleToggle}>
                    <div className="p-2">
                    <TfiAlignRight size={24} />
                    </div>
                </div>

                {/* Navlink  Mobile*/}
                <div className={
                    `${
                    menu ? "translate-x-0":" -translate-x-full"
                    } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 w-full h-fit gap-8 transition-transformd duration-300`
                }>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="home">Branda</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="tentang">Tentang</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="teknologi">Teknologi</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="project">Projek</Link>
                    <Link spy={true} smooth={true} duration="{500}" className="hover:text-brigtGreen" to="kontak">Kontak </Link>
                </div>
            </div>
        </div>
    );
}


export default Navbar;