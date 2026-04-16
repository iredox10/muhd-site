import { Route } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { Index } from './routes/index'
import { catalogRoute } from './routes/catalog'
import { corporateRoute } from './routes/corporate'
import { aboutRoute } from './routes/about'

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  catalogRoute,
  corporateRoute,
  aboutRoute,
])
