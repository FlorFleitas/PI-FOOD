import React from "react";
import "./paginado.css"

export default function Paginado ({recipesPerPage, allRecipes, paginado}){
const pageNumbers = [] // [1,2,3,4,5,6,7,8,9,10,11,12]

for (let i = 1; i <=Math.ceil(allRecipes/recipesPerPage) ; i++) { //MATH.CEIL redondea para arriba
    pageNumbers.push(i);
    
}
return(
    <nav>
        <ul className="paginado">
            {pageNumbers && 
            pageNumbers.map(number => ( //map renderiza cada numero por separado
                <li className="number" key={number}>
                <a onClick={() => paginado(number)}>{number}</a>  {/*le paso el paginado con el num de pagina*/}
                </li>
            ))}
        </ul>
    </nav>

)

}