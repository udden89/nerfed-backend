import bcrypt from "bcrypt"

/* function setPassword(value:string) {
  return bcrypt.hashSync(value, 10)
} */

const setPassword = (password: string) => {
  return bcrypt.hashSync(password, 10)
}

const compare = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword)
}


export { setPassword, compare }