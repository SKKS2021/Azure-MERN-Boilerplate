
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://systemdev:8cwgKwygaKBVIQHjQwJppgAN6V5tlmgSPGYeTE7bbwkiTlcFBweidntfaqKuwg1dFMX2Oe3wj45kX64uCQJx4Q==@systemdev.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@systemdev@";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("<systemdev>");
		dbo.collection("collection1").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;
