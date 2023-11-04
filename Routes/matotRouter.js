const { Router } = require('express');
const {getMatOt} = require('../controllers/matotHandlers')

const matotRouter = Router();


matotRouter.get('/',getMatOt);

module.exports = matotRouter;