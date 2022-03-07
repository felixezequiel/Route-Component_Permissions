import { state } from "../redux/redux"
import { Permissions } from '../redux/redux'

export const isAuth = () => true
export const isFree = (permission: Permissions) => {
  if (state.permissions.find((item) => permission === item)) return true
  else return false
}