import React, { useState } from "react" 
const Card =({data})=> {
    console.log(data); 
    const{FullName ,Bio , img ,Profession} = data;
return (
    <div>
<img width="250px" height="250px"  src={img} />
<h1>{FullName}</h1>

<h2>{Profession}</h2>
<p>{Bio}</p>

    </div>
)

}


export default Card 