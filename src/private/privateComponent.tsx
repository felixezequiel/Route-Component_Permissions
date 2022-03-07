import { isFree } from "../context/context"
import { Permissions } from "../redux/redux"

interface PropsPrivateComponent {
  children: JSX.Element
  permission: Permissions
}

export const PrivateComponent = ({ children, permission }: PropsPrivateComponent) => {
  const free = isFree(permission)
  return free ? children : <></>
}