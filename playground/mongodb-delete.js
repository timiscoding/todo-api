const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // deleteMany
  // db.collection('TodoApp').deleteMany({text: 'Eat lunch'}).then(res => {
  //   console.log(res);
  // });

  // deleteOne
  // db.collection('TodoApp').deleteOne({text: 'Eat lunch'}).then(res => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('TodoApp').findOneAndDelete({completed: false}).then(res => {
  //   console.log(res);
  // });

  // db.close();
});
