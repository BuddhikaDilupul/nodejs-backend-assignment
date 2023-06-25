const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorShema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);
authorShema.virtual("id").get(function () {
  return this._id.toHexString();
});
authorShema.set("toJSON", {
  virtual: true,
});

module.exports = mongoose.model("author", authorShema);
