import React from "react";
import img from '../assets/about.svg'
import { Link } from "react-scroll";
import Sosmed from "./layouts/Somed";



const About =()=>{
    return (
        <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
            <div className="w-full md:w-2/4">
                <img src={img} alt="img"/>
            </div>
            <div className="w-full md:w-2/4 text-center space-y">
                <h3 className="font-bold text-4xl mb-5">Tentang <span className="text-brigtGreen">Kami</span></h3>
                <p align="justify" className="mb-3 lg:leading-6 md:leading-6">
                  Di Jasaku, kami mengkhususkan diri dalam mewujudkan visi digital Anda. Baik Anda perusahaan rintisan yang ingin membangun kehadiran online atau bisnis mapan yang ingin meningkatkan jejak digital Anda, kami menawarkan layanan pengembangan web yang disesuaikan untuk memenuhi kebutuhan unik Anda. 
                </p>
                <p align="justify" className="mb-5 lg:leading-6 md:leading-6">
                    Jasaku didirikan pada 6 Juli 2023, dengan misi untuk memberikan layanan pengembangan web yang luar biasa yang memberdayakan bisnis untuk berkembang di era digital. Perjalanan ini dimulai dengan seorang pengembang yang berdedikasi dan bersemangat dengan visi yang jelas: untuk membuat situs web yang tidak hanya memukau secara visual tetapi juga sangat fungsional.
                </p>
                <div>
                <h4 className="text-2xl jasaku mb-2">Media Sosial</h4>
                    <div className="flex items-center w-full justify-center">
                       <Sosmed/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;