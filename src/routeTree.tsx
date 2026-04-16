import { Route } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { Index } from './routes/index'
import { catalogRoute } from './routes/catalog'
import { productDetailRoute } from './routes/catalog.$productId'
import { checkoutRoute } from './routes/checkout'
import { corporateRoute } from './routes/corporate'
import { aboutRoute } from './routes/about'
import { contactRoute } from './routes/contact'
import { termsRoute } from './routes/terms'

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  catalogRoute,
  productDetailRoute,
  checkoutRoute,
  corporateRoute,
  aboutRoute,
  contactRoute,
  termsRoute,
])
