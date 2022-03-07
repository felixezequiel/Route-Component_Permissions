import { isFree } from "../context/context"
import { Permisisons } from "../redux/redux"

interface PropsPrivateComponent {
  children: JSX.Element
  permission: Permisisons
}

export const PrivateComponent = ({ children, permission }: PropsPrivateComponent) => {
  const free = isFree(permission)
  return free ? children : <></>
}