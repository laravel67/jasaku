import React from "react";

const Cardtecno = (props) => {
    return (
        <div className="flex flex-col items-center bg-white border-2 border-light-text md:border-none md:w-2/5 p-2 cursor-pointer rounded-lg shadow-md hover:shadow-[rgba(0,_0,_0,_0.24)]_0px_3px transition-all">
            <div className="w-full">
                <img src={props.img} alt="img"/>
            </div>
            <div>
                <h3 className="text-3xl text-green-700">
                    {props.title}
                </h3>
                <p>
                    {props.paraf}
                </p>
            </div>
        </div>
    );
};

export default Cardtecno;
