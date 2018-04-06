const {ObjectID} = require('mongodb');

const {mongoose} = require('../db/mongoose');
const {Todo} = require('../models/todo');
const {User} = require('../models/user');

var id = "5ac6fc5ec3d920e307e9e680";

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id,
}).then(todos => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id,
}).then(todo => {
  console.log('Todo', todo);
});

Todo.findById(id).then(todo => {
  console.log('Todo', todo);
}).catch(err => console.log(err));

User.findById('5ac2cda6a431bfad08a93909a').then(user => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('user', user);
}).catch(e => console.log(e));
