const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  db.collection('Users').findOneAndUpdate({name: 'jo'}, {
    $set: {name: 'bill'},
    $inc: {age: 1}
  }, {returnOriginal: false}).then(res => console.log(res));

  // db.close();
});
