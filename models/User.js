const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
      match: [/.+@.+\..+/,"please enter valid email"]
    },
    
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
