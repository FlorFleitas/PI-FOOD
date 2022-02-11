import React from "react";
import "../card/card.css"


export default function Card({image, name, dietType}) {
return(
<div className="contenedor">

<div className="cards"> 
<img src={image} alt="Img not found"/>
<h3>{name}</h3>

<div className="diet">    
<h5>{dietType && dietType.map(type => <p>{type}</p>)}</h5>
</div>
</div>


</div>
)
}