type User = {
  login: string
  name: string
  password: string
  role: string
}
type UserWithoutRole = {
  login: string
  name: string
  password: string
} | null