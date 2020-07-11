const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
  name: { type: String, required: true, max: 255 },
  year: { type: Date, required: true },
  description: { type: String, required: false },
  images: { type: Array, required: false },
});

MovieSchema.plugin(mongoosePaginate);

// Export the model
module.exports = mongoose.model("Movie", MovieSchema);
