import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
     
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required:true
    },
    img: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },
    fromGoogle: {
      type: Boolean,
      default: false,
    },


    isAdmin: {
      type: Boolean,

    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
