import { ReactElement } from "react"
import { Hello } from "../components/hello"
import { World } from "../components/world"
import { Home } from "../pages/home"

export enum Permissions {
  PERMISSION_HELLO = 'PERMISSION_HELLO',
  PERMISSION_WORLD = 'PERMISSION_WORLD',
  PERMISSION_HOME = 'PERMISSION_HOME',
  PERMISSION_LOGIN = 'PERMISSION_LOGIN'
}

export interface ConfigPermissions {
  auth: boolean
  permission: Permissions
  path: string
  component: ReactElement
}

interface TypeState {
  privateRouteConfig: Array<ConfigPermissions>
  permissions: Array<Permissions>
}

export const state: TypeState = {
  privateRouteConfig: [
    {
      auth: true,
      permission: Permissions.PERMISSION_HELLO,
      path: '/hello',
      component: <Hello />
    },
    {
      auth: true,
      permission: Permissions.PERMISSION_HOME,
      path: '/home',
      component: <Home />
    },
    {
      auth: true,
      permission: Permissions.PERMISSION_WORLD,
      path: '/world',
      component: <World />
    }
  ],
  permissions: [
    Permissions.PERMISSION_HELLO,
    Permissions.PERMISSION_HOME,
    Permissions.PERMISSION_WORLD,
    Permissions.PERMISSION_LOGIN
  ]
}