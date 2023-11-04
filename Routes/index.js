const {Router} = require('express') 
const matotRouter = require('./matotRouter');



const mainRouter = Router();

mainRouter.use('/matot',matotRouter);



module.exports = mainRouter;

