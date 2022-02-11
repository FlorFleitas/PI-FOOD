import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions";
import { useEffect } from "react";
import styles from "../details/details.css"

export default function Details(props) {
    
    const dispatch = useDispatch();
    const id = props.match.params.id

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])



    const myRecipe = useSelector((state) => state.details)
    
    console.log(myRecipe)
    return (
        <div className={styles.det}>
            {
                myRecipe.length > 0 ?
                    <div className="todo">
                        <h1>{myRecipe[0].name}</h1>
                        <img alt="img not found" src={myRecipe[0].image} />
                        <h5>SUMMARY: {(<p dangerouslySetInnerHTML={{__html: myRecipe[0].summary}}></p>)}</h5>
                        <h3 className="sc">Score: {myRecipe[0].score}</h3>
                        <h3 className="hs">healthScore: {myRecipe[0].healthScore}</h3>
                        <h4>STEPS: {myRecipe[0].steps}</h4>
                        {console.log("hola", myRecipe[0].steps)}
                    </div> : <p>Loading...</p>
            }
            <Link to="/home">
                <button>Go back</button>
            </Link>

        </div>
    )
}