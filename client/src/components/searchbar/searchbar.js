import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../actions";
import "../searchbar/searchbar.css"

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("") // aca se va a guardar lo q vaya escribiendo el usuario

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameRecipes(name))
    }
    


    return (
    
        <div className="barra">
            <input 
                type="text"
                placeholder=""
                onChange={(e) => handleInputChange(e)}
            />
            
                <button className="search" type="submit" onClick={(e) => handleSubmit(e)}></button>
                
        </div>
    
    )
}