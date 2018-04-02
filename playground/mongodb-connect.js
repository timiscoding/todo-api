const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('TodoApp').insertOne({
  //   text: 'Do something',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Did not insert document', err);
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Tim',
    age: 32,
    location: 'Aus',
  }, (err, result) => {
    if (err) {
      return console.log('Did not insert document', err);
    }
    console.log(JSON.stringify(result.ops, null, 2));
  });

  db.close();
});
