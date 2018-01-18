var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  /*Return only the documents with the address "Park Lane 38":*/
  var ex1 =db.db("music")

  var query = { musicdirector: "a.r.rahman" };
  ex1.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
