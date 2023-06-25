const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryShema = new Schema(
  {
    categoryName: {
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
categoryShema.set("toJSON", {
  virtual: true,
});

module.exports = mongoose.model("category", categoryShema);
