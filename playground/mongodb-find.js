const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('TodoApp').find().count().then((count) => {
  //   console.log('Todos', count);
  // }, err => {
  //   console.log("unable to fetch data", err);
  // });

  db.collection('Users').find({name: 'jo'}).count().then(count => {
    console.log('Users', count);
  }, err => {
    console.log("unable to fetch count", err);
  });

  // db.close();
});
