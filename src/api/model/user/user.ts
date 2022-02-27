import mongoose from "mongoose"
import { setPassword } from "../../../utils/bcrypt"

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true,
    set: setPassword
  }
})


export default mongoose.model("User", UserSchema)

