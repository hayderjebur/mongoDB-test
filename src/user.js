const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointSchema =new Schema({
  type:{type: String,default:'Point'},
  coordinates:{ type: [Number], index: '2dsphere'}
})


const DriverSchema = new Schema({
  name: String,
  geometry: PiontSchema
});

const Driver = mongoose.model("driver", DriverSchema);

module.exports = Driver;


//IN Server the route like:
 Driver.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          maxDistance: 200000,
          spherical: true,
          distanceField: "dist.calculated"
        }
      }
    ])
    .then(drivers => res.send(drivers))
    .catch(next);
  },

