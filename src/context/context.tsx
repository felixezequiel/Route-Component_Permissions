import { state } from "../redux/redux"
import { Permisisons } from '../redux/redux'

export const isAuth = () => true
export const isFree = (permission: Permisisons) => {
  if (state.permissions.find((item) => permission === item)) return true
  else return false
}