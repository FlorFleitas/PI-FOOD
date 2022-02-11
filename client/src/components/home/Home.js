import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByDiets, getRecipes, orderByName, orderByScore } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import Paginado from "../paginado/Paginado";
import NavBar from "../navbar/NavBar";
import logo from "../../images/logo.gif"

import "../home/home.css"
import SearchBar from "../searchbar/searchbar.js"

export default function Home() {

    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes);

    const [orden, setOrden] = useState('') // estado local vacio
    const [currentPage, setCurrentPage] = useState(1) //--le paso el estado local con la primer pag q se renderiza
    const [recipesPerPage, setRecipesPerPage] = useState(9) //otro estado local, mis recetas por pagina q seran 9
    const indexOfLastRecipe = currentPage * recipesPerPage //pagina actual en la q estoy * la cant de recetas por pag. Inicialmente es 9.
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage // 0
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) //guarda todas las recetas q tengo por pagina


    //Pag 1.---- 0 --- 9
    //Pag 2 ---- 10 --- 13


    const paginado = (pageNumber) => { //tomo un num de pagina
        setCurrentPage(pageNumber) //seteo la pagina en ese num de pag.

    }


    useEffect(() => {
        dispatch(getRecipes());
    }, [])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }
    function handleFilterDiets(e) {
        dispatch(filterByDiets(e.target.value))
        setCurrentPage(1) //toma como payload(action) el valor de cada uno dependiendo de cual clickea el usuario
    }
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1); //setear el ordenamiento en la primer pag
        setOrden(`Ordenado ${e.target.value}`) // a ese estado local modificalo para q lo renderice en el home
    };
    function handleSortScore(e) {
        e.preventDefault();
        dispatch(orderByScore(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }


    if (typeof allRecipes === "string") {
        return (
            <div className="notfound">
                <h1>Sorry, recipe not found!</h1>
                <img src={logo} alt='recipe not found' />
                <a href="/home"><button className="back">Go back</button></a>
            </div>
        )
    };
    return (
        <div id="home">
            <NavBar />
            <div className="search">
                <SearchBar />

            </div>
            <div className="h5">
                <h5>Find a recipe</h5>
            </div>
            <div className="clean">
                <button onClick={e => { handleClick(e) }}>
                    Clean filter
                </button></div>
            <div className="filters">
                <select onChange={e => { handleSort(e) }}>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>

                <select className="select" name="numerical" onChange={e => { handleSortScore(e) }}>
                    <option value="p.asc">Highest Score</option>
                    <option value="P.desc">Lower Score</option>
                </select>

                <select onChange={e => { handleFilterDiets(e) }}>
                    <option value="Types">Diet Types</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Lacto Ovo Vegetarian">Lacto Ovo Vegetarian</option>
                    <option value="Dairy Free">Dairy Free</option>
                    <option value="Vegan"> Vegan</option>
                    <option value="Pescetarian">Pescetarian</option>
                    <option value="Paleolithic">Paleolithic</option>
                    <option value="Primal">Primal</option>
                    <option value="Low FODMAP">Low FODMAP</option>
                    <option value="Whole30">Whole30</option>
                </select>

            </div>

            <section className="section">

                    {
                        currentRecipes && currentRecipes.map(c => { //currentRecipes guarda las recetas que me devuelve el paginado
                            return (

                                <Link key={c.id} to={'home/' + c.id}>
                                    <Card
                                        name={c.name}
                                        dietType={c.dietType ? c.dietType : c.dieta.map(e => e.name)}
                                        image={c.image}
                                        id={c.id} />
                                </Link>

                            )
                        })
                    }

                <Paginado
                    recipesPerPage={recipesPerPage} //defino los parametros q le voy a pasar al otro componente
                    allRecipes={allRecipes.length} //.length porque necesito un numero
                    paginado={paginado}
                />
            </section>



        </div>

    )
}