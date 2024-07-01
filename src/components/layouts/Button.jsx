import React from "react";

const Button =(props)=>{
    return (
        <div>
            <button className="bg-white py-2 px-6 rounde-full ">
                {props.title}
            </button>
        </div>
    );
}