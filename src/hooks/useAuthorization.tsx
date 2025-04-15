import { authorizationContext } from "@/providers/AuthorizationProvider"
import axios, { AxiosResponse } from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const baseUrl = 'http://localhost:3000'

const useAuthorization = () => {
  const stringifiedUser = localStorage.getItem('user')
  const user = stringifiedUser && JSON.parse(stringifiedUser)
  const navigate = useNavigate()
  const logIn = async (userLoginData: { password: string, login: string }) => {
    const respond: any = await axios.post(`${baseUrl}/login`, userLoginData)
    if (respond.status == 401) {
      return false
    }
    const data = respond.data;
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data.user))
    if (data.user) {
      navigate('/products')
    }
    // /* setTimeout(() => */ window.location.href = respond.data.redirect/*, 10000)*/
    return true
  }
  const register = async (user: User) => {
    const response = await axios.post(`${baseUrl}/register`, user)
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }
  const logOut = () => {
    localStorage.removeItem('user')
  }
  return { user, logIn, register, logOut }
}
export { useAuthorization }