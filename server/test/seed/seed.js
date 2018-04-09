const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const { Todo } = require('../../../models/todo');
const { User } = require('../../../models/user');

const todos = [
  { _id: new ObjectID(), text: "First test todo" },
  { _id: new ObjectID(), text: "Second test todo", completed: true, completedAt: 1234 },
];

const populateTodos = done => {
  Todo.remove({})
    .then(() => Todo.insertMany(todos))
    .then(() => done());
};

const userAuthId = new ObjectID();
const userUnauthId = new ObjectID();

const users = [
  {
    _id: userAuthId,
    email: 'userAuth@abc.com',
    password: 'userAuthPassword',
    tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userAuthId, access: 'auth'}, 'abc123').toString()
    }]
  },
  {
    _id: userUnauthId,
    email: 'userUnauth@abc.com',
    password: 'userUnauthPassword',
  }
];

const populateUsers = done => {
  User.remove({}).then(() => {
    var userAuth = new User(users[0]).save();
    var userUnauth = new User(users[1]).save();

    return Promise.all([userAuth, userUnauth]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
