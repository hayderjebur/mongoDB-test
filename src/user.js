const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointSchema =new Schema({
  type:{type: String,default:'Point'},
  coordinates:{ type: [Number], index: '2dsphere'}
})


const DeriverSchema = new Schema({
  name: String,
  geometry: PiontSchema
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
