const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema = new Schema(
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
    role: {
      type: String,
      default:"User"
    },
    password: {
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
userShema.virtual("id").get(function () {
  return this._id.toHexString();
});
userShema.set("toJSON", {
  virtual: true,
});

module.exports = mongoose.model("user", userShema);
