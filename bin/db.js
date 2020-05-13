
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/builder1";
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useUnifiedTopology: true, useNewUrlParser: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;