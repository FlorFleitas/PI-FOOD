const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRoute = require('./recipeRoute')  
const dietaRoute = require('./dietaRoute')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", recipeRoute);
router.use("/dieta", dietaRoute);


module.exports = router;

