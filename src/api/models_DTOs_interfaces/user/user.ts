import mongoose from "mongoose"
import { hashPassword } from "../../services/auth_services/bcrypt"
import { createJWTToken } from "../../services/auth_services/jwt"

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

  user.password = hashPassword(user.password)
  next()
})

export default mongoose.model("User", UserSchema)

