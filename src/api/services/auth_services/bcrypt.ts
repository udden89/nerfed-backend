import bcrypt from "bcrypt"

/* function setPassword(value:string) {
  return bcrypt.hashSync(value, 10)
} */

const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10)
}

const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword)
}


export { hashPassword, comparePassword }