import { ReactElement } from "react"
import { Hello } from "../components/hello"
import { World } from "../components/world"
import { Home } from "../pages/home"

export enum Permisisons {
  PERMISSION_HELLO = 'PERMISSION_HELLO',
  PERMISSION_WORLD = 'PERMISSION_WORLD',
  PERMISSION_HOME = 'PERMISSION_HOME',
  PERMISSION_LOGIN = 'PERMISSION_LOGIN'
}

export interface ConfigPermissions {
  auth: boolean
  permission: Permisisons
  path: string
  component: ReactElement
}

interface TypeState {
  privateRouteConfig: Array<ConfigPermissions>
  permissions: Array<Permisisons>
}

export const state: TypeState = {
  privateRouteConfig: [
    {
      auth: true,
      permission: Permisisons.PERMISSION_HELLO,
      path: '/hello',
      component: <Hello />
    },
    {
      auth: true,
      permission: Permisisons.PERMISSION_HOME,
      path: '/home',
      component: <Home />
    },
    {
      auth: true,
      permission: Permisisons.PERMISSION_WORLD,
      path: '/world',
      component: <World />
    }
  ],
  permissions: [
    Permisisons.PERMISSION_HELLO,
    Permisisons.PERMISSION_HOME,
    Permisisons.PERMISSION_WORLD,
    Permisisons.PERMISSION_LOGIN
  ]
}