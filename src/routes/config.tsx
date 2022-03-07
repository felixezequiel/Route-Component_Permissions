import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Login } from '../pages/login'
import { PrivateRoute } from '../private/privateRoute'
import { state } from '../redux/redux'

export const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />

        {state.privateRouteConfig.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={<PrivateRoute permission={route} />}
          >
            <Route path='' element={route.component} />
          </Route>
        ))}

      </Routes>
    </Router>
  )
}