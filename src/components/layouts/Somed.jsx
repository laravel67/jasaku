import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Sosmed=()=>{
    return (
        <>
               <a href="https://web.facebook.com/murtaki.99/" target="__blank">
                    <div className="p-2 text-xl rounded-full cursor-pointer bg-gray-300 mx-2 hover:bg-gray-400 text-blue-600 shadow-lg">
                        <FaFacebook />
                    </div>
                </a>

                      <a href="https://web.facebook.com/murtaki.99/" target="__blank">
                    <div className="p-2 text-xl rounded-full cursor-pointer bg-gray-300 mx-2 hover:bg-gray-400 text-pink-600 shadow-lg">
                        <FaInstagram />
                    </div>
                </a>

                   <a href="https://www.tiktok.com/@murtaki.67" target="__blank">
                    <div className="p-2 text-xl rounded-full cursor-pointer bg-gray-300 mx-2 hover:bg-gray-400 text-black-600 shadow-lg">
                        <FaTiktok />
                    </div>
                </a>

                   <a href="https://www.youtube.com/channel/UCOmyAy_MTi2jw-4SZMFFB-Q" target="__blank">
                    <div className="p-2 text-xl rounded-full cursor-pointer bg-gray-300 mx-2 hover:bg-gray-400 text-red-600 shadow-lg">
                        <IoLogoYoutube />
                    </div>
                </a>

                 <a href="https://www.linkedin.com/in/murtaki-588a69255/" target="__blank">
                    <div className="p-2 text-xl rounded-full cursor-pointer bg-gray-300 mx-2 hover:bg-gray-400 text-blue-900 shadow-lg">
                        <FaLinkedin />
                    </div>
                </a>
        </>
    );
}

export default Sosmed;