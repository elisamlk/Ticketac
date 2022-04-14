var mongoose = require("mongoose");

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(
  "mongodb+srv://elisamlk:Laureneetelisa@ticketac.wj5gp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  options,
  function (err) {
    console.log(err);
  }
);

module.exports = mongoose;
