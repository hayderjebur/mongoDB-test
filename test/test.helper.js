const mongoose = require("mongoose");
const mongoURL = require("../src/config");

mongoose.connect(mongoURL.MONGO_URL);
mongoose.connection
  .once("open", () => console.log("it is working"))
  .on("error", error => {
    console.log("something went wrong", error);
  });

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
