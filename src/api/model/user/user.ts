import mongoose from "mongoose"
import { hashPassword as password } from "../../../utils/bcrypt"

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true,
  }
})

UserSchema.pre("save", function (next) {
  let user = this

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()

  user.password = password(user.password)
  next()

})

export default mongoose.model("User", UserSchema)

