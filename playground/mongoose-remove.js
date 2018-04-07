const {ObjectID} = require('mongodb');

const {mongoose} = require('../db/mongoose');
const {Todo} = require('../models/todo');
const {User} = require('../models/user');

// Todo.remove({}).then(res => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5ac821ede2a5c8c3124d74cb').then(todo => {
  console.log(todo);
});
