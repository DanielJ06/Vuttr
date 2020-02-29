const {Router} = require('express');
const routes = Router();

//Controllers
const ToolController = require('./controllers/ToolController')

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes