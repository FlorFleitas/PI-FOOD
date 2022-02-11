import React from 'react';
import Logo from '../../images/mylogo.png'
import '../navbar/navbar.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../actions";


function Nav() {
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
        <ul>   <li>
            <div className="topnav">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <ul className='navlinks'>
                        <li><a href="/">Landing Page</a></li>
                        <li><a href="/home">All Recipes</a></li>
                        <li><a href="/recipe">Add your recipe</a></li>
                    </ul>
                </nav>

                <div className='buscar'>
                <input 
                type="text"
                placeholder="Find a recipe..."
                onChange={(e) => handleInputChange(e)}
                />        
                
                <button className="btn" type="submit" onClick={(e)=> handleSubmit(e)}></button>
            
                </div>

            </div>
        </li></ul>
    );
};

export default Nav;