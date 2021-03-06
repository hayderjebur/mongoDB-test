const mongoose = require("mongoose");
const mongoURL = require("../src/config");
mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect(mongoURL.MONGO_URL);
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.log("something went wrong", error);
    });
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
