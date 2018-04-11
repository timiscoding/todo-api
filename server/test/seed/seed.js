const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const { Todo } = require('../../../models/todo');
const { User } = require('../../../models/user');


const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: 'userAuth@abc.com',
    password: 'userAuthPassword',
    tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
  },
  {
    _id: userTwoId,
    email: 'userUnauth@abc.com',
    password: 'userUnauthPassword',
    tokens: [{
      access: 'auth',
      token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'abc123').toString()
    }]
  }
];

const todos = [
  {
    _id: new ObjectID(),
    text: "First test todo",
    _creator: userOneId,
  },
  {
    _id: new ObjectID(),
    text: "Second test todo",
    completed: true,
    completedAt: 1234,
    _creator: userTwoId,
  },
];

const populateTodos = done => {
  Todo.remove({})
    .then(() => Todo.insertMany(todos))
    .then(() => done());
};

const populateUsers = done => {
  User.remove({}).then(() => {
    var userAuth = new User(users[0]).save();
    var userUnauth = new User(users[1]).save();

    return Promise.all([userAuth, userUnauth]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
