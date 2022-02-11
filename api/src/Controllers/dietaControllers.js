const { Dieta } = require("../db")





const dietType = async (req, res) => {
    let dietas = [
        'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto ovo Vegetarian',
        'Vegan',
        "Pescetarian",
        'Paleolithic',
        'Primal',
        'Low FODMAP',
        'Whole30',
        "dairy free"
        
        
    ];
    
    dietas.forEach(element => {
        Dieta.findOrCreate({
        where: {name: element}
        })
    
    })
        const AllTypes = await Dieta.findAll();
        
        
    res.json(AllTypes);
    console.log("ALL TYPES", AllTypes)
}





module.exports = {
    dietType
};