var db = require('../models');
var Task = db.Task;

let taskController = {
  index: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        // res.json(tasks);
        res.render('index', {"tasks": tasks});
      });
  },
  show: function (req, res) {
    Task.findById(req.params.id)
      .then(function (task) {
        // res.json(task);
        res.render('show', {"task": task});
      });
  },
  store: function (req, res) {
    Task.create({
        title: req.title, 
        createdAt : new Date(),
        updatedAt : new Date(),
      })
      .then(function (task) {
        res.json(task);
      });
  },
  update: function (req, res) {
    Task.findById(req.params.id)
      .then(function (task) {
        task.updateAttributes(req.body)
          .then(function(task) {
            res.json(task);
          });
      });
  },
  destroy: function (req, res) {
    Task.findById(req.params.id)
      .then(function (task) {
        task.destroy()
          .then(function(task) {
            res.json(task);
          });
      });
  },
};
module.exports = taskController;