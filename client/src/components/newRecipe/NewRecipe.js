import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDiets } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "../newRecipe/newRecipe.css"


function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "The recipe's name is required.";

    } else if (!input.summary) {
        errors.summary = "The summary is required."
    } else if (!input.steps) {
        errors.steps = "The steps are required."
    } else if (!input.image) {
        errors.steps = "The image is required."
    }


    return errors;
}




export default function NewRecipe() {
    const dispatch = useDispatch();
    const history = useHistory();
    const dietTypes = useSelector((state) => state.dietTypes)
    const [errors, setErrors] = useState({});


    const [input, setInput] = useState({
        name: "",
        summary: "",
        score: "",
        healthScore: "",
        steps: "",
        image: "",
        dietTypes: []
    })
    console.log(input)

    useEffect(() => {
        dispatch(getDiets())
    }, [])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSelect(e) {
        setInput({
            ...input,
            dietTypes: [...input.dietTypes, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecipe(input))
        alert("The recipe was created successfully!")
        setInput({
            name: "",
            summary: "",
            score: "",
            healthScore: "",
            steps: "",
            image: "",
            dietTypes: []

        })
        history.push("/home")
        
    }

    function handleDelete(el) {
        setInput({
            ...input,
            dietTypes: input.dietTypes.filter(d => d !== el)
        })
    }



    return (
        <div className="new">
            <Link to="/home"><button className="back">Go back</button></Link>
            <h1>Create your recipe</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={input.name}
                            name="name"
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </div>

                    <div className="res">
                        <label>Summary:</label>
                        <input
                            type="text"
                            value={input.summary}
                            name="summary"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.summary && (
                        <p className="errorsum">{errors.summary}</p>
                    )}

                    <div>
                        <label>Score:</label>
                        <input
                            type="integer"
                            value={input.score}
                            name="score"
                            onChange={handleChange}
                        />
                    </div>


                    <div>
                        <label>healthScore:</label>
                        <input
                            type="integer"
                            value={input.healthScore}
                            name="healthScore"
                            onChange={handleChange}
                        />
                    </div>


                    <div className="paso">
                        <label>Steps:</label>
                        <input
                            type="text"
                            value={input.steps}
                            name="steps"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.steps && (
                        <p className="errorsteps">{errors.steps}</p>
                    )}

                    <div>
                        <label>Image:</label>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.image && (
                        <p className="error">{errors.image}</p>
                    )}

                    <div>
                        <label>Diets</label>

                        <select className="diets" onChange={(e) => handleSelect(e)}>
                            <option value="Gluten Free">Gluten Free</option>
                            <option value="Ketogenic">Ketogenic</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Lacto Ovo Vegetarian">Lacto Ovo Vegetarian</option>
                            <option value="Dairy Free">Dairy Free</option>
                            <option value="Vegan"> Vegan</option>
                            <option value="Pescetarian">Pescetarian</option>
                            <option value="Paleolithic">Paleo</option>
                            <option value="Primal">Primal</option>
                            <option value="Low FODMAP">Low FODMAP</option>
                            <option value="Whole30">Whole30</option>
                        </select>
                    </div>

                    <button disabled={errors.name || errors.summary || errors.steps || errors.image} className="submit" type="submit">Create Recipe</button>

                </div>

            </form>
            {input.dietTypes.map(el =>
                <div key={el.id} className="divDiets">
                    <p>{el}</p>
                    <button className="bontonX" onClick={() => handleDelete(el)}>X</button>
                </div>
            )}
        </div>
    )
}