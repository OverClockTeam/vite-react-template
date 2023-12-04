import { lazy } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  ScrollRestoration,
} from 'react-router-dom'

import lazyLoad from '@utils/lazyLoad'

const Demo = lazy(() => import('@pages/DemoPage'))

// Use ScrollRestoration to resume the position of scrollbar
const Root = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname
        }}
      />
    </>
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to='/demo' replace />,
      },
      {
        path: 'demo',
        element: lazyLoad(<Demo />),
        children: [
          {
            index: true,
            element: <Navigate to='/demo' />,
          }
        ],
      },
      {
        path: '*',
        element: <div>Page404</div>,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router

export interface IHandle {
  toolbar: string
  navbar: string
}
