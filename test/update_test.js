const assert = require("assert");
const User = require("../src/user");

describe("Upating records", () => {
  let jeo;

  beforeEach(done => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("instance type using set and save", done => {
    joe.set("name", "Hayder");
    joe
      .save()
      .then(() => User.find({}))
      .then(users => {
        assert(users.length === 1);
        assert(users[0].name === "Hayder");
        done();
      });
  });
});
