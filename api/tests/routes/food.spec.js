/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');
const dietaContollers = require("../../src/Controllers/dietaControllers")
const recipeControllers = require("../../src/Controllers/recipeControllers")


const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });
});

describe("/dieta/types", function() {
  it("GET responde con un array con todos los tipos de dieta", function () {
    dietaContollers.dietType("Vegan");
    dietaContollers.dietType("Vegetarian");
    agent
      .get("/dieta/types")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql([  'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto ovo Vegetarian',
        'Vegan',
        "Pescetarian",
        'Paleolithic',
        'Primal',
        'Low FODMAP',
        'Whole30',
        "dairy free"]);
      });
  });
})

describe("/recipe", function() {
  it("POST agrega una nueva receta", function () {
    
    dietaContollers.dietType("Ketogenic");
    recipeControllers.recibeRecipe("Fideos", "tallarines italianos muy ricos", "98", "65", "hervir agua y colocar los fideos", "Ketogenic");
    agent
      .post("/recipe")
      .send({
        name: "Fideos",
        summary: "tallarines italianos muy ricos",
        score: 98,
        healthScore: 65,
        steps:"hervir agua y colocar los fideos",
        dietType: "Ketogenic"
      })
      .expect(201)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql("The recipe was created successfully!");
      
      });
  });

})


describe("/recipes?name=''", function() {
  it("GET responde con la receta cuyo name es pasado por query", function () {
recipeControllers.recibeRecipe("Fideos", "tallarines italianos muy ricos", "98", "65", "hervir agua y colocar los fideos", "Ketogenic")
agent
.get("/recipes?name=Fideos")
.send({ name: "Fideos" })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql([
          {name: "Fideos", summary: "tallarines italianos muy ricos", score: 98, healthScore: 65, steps:"hervir agua y colocar los fideos", dietType:"Ketogenic"}])
        })
  }
)
})