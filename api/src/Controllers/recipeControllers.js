const { Recipe, Dieta } = require("../db.js");
const axios = require("axios");





const getRecipesDB = async (req, res) => {
    let responseDB = await Recipe.findAll({
        include: {
            model: Dieta,
            attribute: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    return responseDB;
}; 

const getRecipesApi = async (req, res) => {
    const apiLink = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=bba8468c21d6471c8070bcc813517833`);
    const response = apiLink.data.results.map(d => {
        return {
            id: d.id,
            name: d.title,
            summary: d.summary,
            score: d.spoonacularScore,
            healthScore: d.healthScore,
            image: d.image,
            dietType: d.diets,
            steps: (d.analyzedInstructions[0] && d.analyzedInstructions[0].steps ? d.analyzedInstructions[0].steps.map(item => item.step).join(" \n") : '')
        };
    });
    return response;



};

const getAll = async (req, res) => {
    const getDB = getRecipesDB();
    const getApi = await getRecipesApi();
    const arrayAllRecipes = await Promise.all([getDB, getApi]) 
    const [DBresponse, ApiResponse] = arrayAllRecipes;
    const recipes = DBresponse.concat(ApiResponse);

    return recipes;
}

const getRecipes = async (req, res) => {
    const name = req.query.name;
    let getRecipess = await getAll().catch(err => console.log('errorrrr'));
    if (name) {
        const Rname = await getRecipess.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()))
        Rname.length
            ? res.status(200).send(Rname)
            : res.send("No se ha encontrado una receta con ese nombre");
    } else {
        return res.status(200).send(getRecipess);
    }

};





const idReceta = async (req, res) => {
    try {
        const { id } = req.params;
        const recetas = await getAll();

        if (id) {
            const idRecipe = recetas.filter(r => r.id == id);

            if (idRecipe) {
                res.send(idRecipe);

            } else {

                let error = {
                    name: "Receta no encontrada",
                    image: "https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg"
                }
                res.status(404).send(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
}





const recibeRecipe = async (req, res) => {
    const { name, summary, image, score, healthScore, steps, dietTypes } = req.body;

    const newRecipe = await Recipe.create({

        name,
        summary,
        image,
        score,
        healthScore,
        steps


    });
    let dietTypeinDB = await Dieta.findAll({
        where: { name: dietTypes },
    });

console.log(newRecipe)
    newRecipe.addDieta(dietTypeinDB);
    res.send(newRecipe)
};


module.exports = {
    getRecipes,
    idReceta,
    recibeRecipe
};