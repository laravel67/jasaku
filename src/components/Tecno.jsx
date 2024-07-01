import React from "react";

import laravel from '../assets/laravel.jpg';
import re from '../assets/react.png';
import ci from '../assets/ci.png';
import livewire from '../assets/livewire.png'
import mysql from '../assets/mysql.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/Javascript.jpg';
import bootstrap from '../assets/bootstrap.jpg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import vuew from '../assets/vuew.jpg'
import Cardtecno from "./layouts/Cardtecno";



const Tecno=()=> {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center md:px-32 px-5 mt-10">
            {/* <Head title="Teknologi"/> */}
                <h3 className="text-4xl font-semibold">Teknologi</h3>
            <div/>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Cardtecno img={re} title={'React JS'} />
                <Cardtecno img={ci}  title={'Codeigniter'} />
                <Cardtecno img={laravel} title={'Laravel'} />
                <Cardtecno img={livewire} title={'Laravel Livewire'} />
                <Cardtecno img={tailwind} title={'Tailwind CSS'} />
                <Cardtecno img={vuew} title={'Vue JS'}  />
                <Cardtecno img={mysql} title={'MySQL'} />
                <Cardtecno img={javascript} title={'Javascript'} />
                <Cardtecno img={html} title={'HTML'} />
                <Cardtecno img={css} title={''} />
            </div>
        </div>
    </div>
    )
}

export default Tecno;