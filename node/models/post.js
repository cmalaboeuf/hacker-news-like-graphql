import mongoose from 'mongoose';

var postSchema = new mongoose.Schema({
  title: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  vote: {
    type: Number
  }
});

export default mongoose.model('Post', postSchema);
