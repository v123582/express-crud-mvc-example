const taskController = require('../controllers/taskController.js');

module.exports = function (app) {

  app.get('/tasks', taskController.index);
  app.get('/task/:id', taskController.show);
  app.post('/task', taskController.store);
  app.put('/task/:id', taskController.update);
  app.delete('/task/:id', taskController.destroy);

};