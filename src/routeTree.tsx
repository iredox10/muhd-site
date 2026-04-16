import { RootRoute, Route } from '@tanstack/react-router'
import { Root } from './routes/__root'
import { Index } from './routes/index'

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

export const routeTree = rootRoute.addChildren([indexRoute])
