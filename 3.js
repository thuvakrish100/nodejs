var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var ex1 = [
    { songname: 'thaniye thananthaniye', film:'rhythm', musicdirector:'a.r.rahman' , singer:'shankar mahadevan'},
    { songname: 'evano oruven', film:'alaipayuthey', musicdirector:'a.r.rahman' , singer:'swarnalatha'},
    { songname: 'roja poonthottam', film:'kannukul nilavu', musicdirector:'ilaiyaraja' , singer:'unnikrishnan,anuratha sriram'},
    { songname: 'vennilavae vennilavae vinnaithandi', film:'minsara kanavu', musicdirector:'a.r.rahman' , singer:'hariharan,sadhana sargam'},
    { songname: 'sollamalthottu chellum thendral', film:'dheena', musicdirector:'yuvan shankar raja' , singer:'hariharan'},

  ];
  var uki=db.db("music");


  uki.collection("songdetails").insertMany(ex1, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
