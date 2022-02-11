

const initialState = {
    recipes: [],
    allRecipes: [],
    dietTypes: [],
    details: []

}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case "GET_DIETS":
            return {
                ...state,
                dietTypes: action.payload
            }
        case 'FILTER_BY_DIET':

            const allRecipes = state.allRecipes
            const dietaMinuscula = action.payload.toLowerCase()
            
            console.log(allRecipes)
            const recipeBuscada = allRecipes.filter( recipe => recipe.dietType? recipe.dietType.includes(dietaMinuscula) : recipe.dieta.includes(dietaMinuscula) )
            console.log("dietFilter", recipeBuscada)
            return {
                ...state,
                recipes: recipeBuscada
            };


        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === "asc" ?
                state.recipes.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;

                }) :
                state.recipes.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;

                })
            return {
                ...state,
                recipes: sortedArr
            }

        case "ORDER_BY_SCORE":
            let sortedRecipesByScore = [...state.recipes]
            sortedRecipesByScore = action.payload === 'p.asc' ?
                state.recipes.sort(function (a, b) {
                    if (a.score < b.score) return 1;
                    if (a.score > b.score) return -1;
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.score > b.score) return 1;
                    if (a.score < b.score) return -1;
                    return 0;
                })
            return {
                ...state,
                recipes: sortedRecipesByScore
            };


        case 'GET_NAME_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }

        case "POST_RECIPES":
            return {
                ...state,
            }

        case "GET_DETAILS":
            return {
                ...state,
                details: action.payload
            }





        default:
            return state;
    }
}

export default rootReducer;