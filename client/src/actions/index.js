import axios from "axios";
//aca solo dispacho el tipo

export function getRecipes() {
    return async function (dispatch) {
        var json = await axios("http://localhost:3001/recipes", {

        });

        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data

        })
    }
}

export function filterByDiets(payload) {
    return {
        type: 'FILTER_BY_DIET',
        payload
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByScore(payload) {
    return {
        type: 'ORDER_BY_SCORE',
        payload
    }
}


export function getNameRecipes(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/recipes?name=" + name);
            console.log(json)
            return dispatch({
                type: 'GET_NAME_RECIPES',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export function getDiets() {
    return async function (dispatch) {
        var info = await axios("http://localhost:3001/dieta/types/", {

        })
        return dispatch({ type: "GET_DIETS", payload: info.data })
    }
}


export function postRecipe(payload) { //payload es la data q me envia para crear la recipe
    return async function (dispatch) {
        var response = await axios.post("http://localhost:3001/recipe", payload)
        return response;
    }
}


export function getDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/recipes/" + id);
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

