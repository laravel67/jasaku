import React from "react";


const Head=(props)=>{
    return(
        <div>
          <h3 className="text-4xl font-semibold">
            {props.title}
          </h3>
          <span className="text-brigtGreen text-4xl">
            {props.subtitle}
          </span>   
        </div>
    )
}

export default Head;