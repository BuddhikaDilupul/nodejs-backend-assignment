const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    ISBN: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'author',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'author',
      required: true,
    },

    likes: [mongoose.Types.ObjectId],

    status: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);
bookSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
bookSchema.set("toJSON", {
  virtual: true,
});

module.exports = mongoose.model("book", bookSchema);
