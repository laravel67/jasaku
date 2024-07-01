import React from "react";
import { Link } from "react-scroll";
import img from  '../assets/hero.svg'

const Home=()=>{
    return (
    <div className="min-h-[70] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-24">
        <div className="md:w-2/4 text-center">
            <h2 className="text-4xl font-semibold">Selamat datang di</h2>
            <h1 className="text-6xl jasaku font-bold mb-5 text-brigtGreen">Jasaku</h1>
            <p align="justify" className="mb-10 lg:leading-6 md:leading-6">
                Di Jasaku, kami berspesialisasi dalam mewujudkan visi digital Anda. Baik Anda seorang startup yang ingin membangun kehadiran online atau bisnis mapan yang bertujuan untuk meningkatkan jejak digital Anda, kami menawarkan layanan pengembangan web yang disesuaikan untuk memenuhi kebutuhan unik Anda.
            </p>

            <a href="#" spy={true} smooth={true} duration={500} className="py-3 px-5 rounded-full bg-brigtGreen text-white mt-36 outline hover:shadow-[rgba(0,_0_,0,_0.24)_0px_3px_8px] hover:bg-green-900 transition-all cursor-pointer">Hubungi Kami
            </a>
        </div>  
        <di className="w-full md:w-2/4">
            <img src={img} alt="img" />
        </di> 
    </div>
    );
}

export default Home;