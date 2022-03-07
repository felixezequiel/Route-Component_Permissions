import { ReactElement } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { isAuth, isFree } from "../context/context"
import { ConfigPermissions } from "../redux/redux"

interface PropsPrivateRoute {
  permission: ConfigPermissions
}
export const PrivateRoute = ({ permission }: PropsPrivateRoute):ReactElement | null => {
  const auth = isAuth() || !permission.auth
  const free = isFree(permission.permission)
  
  return auth && free ? <Outlet /> : <Navigate to='/' />
}