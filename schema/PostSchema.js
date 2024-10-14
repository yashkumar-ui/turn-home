const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema({
  id: String,
  catagory: String,
  title: String,
  image: String,
  description: String,
});

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);

export default Posts;
