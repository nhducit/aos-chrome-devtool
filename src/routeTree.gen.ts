/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ShoppingCartImport } from './routes/shopping-cart'
import { Route as MfaImport } from './routes/mfa'
import { Route as CashRedemptionImport } from './routes/cash-redemption'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ShoppingCartRoute = ShoppingCartImport.update({
  id: '/shopping-cart',
  path: '/shopping-cart',
  getParentRoute: () => rootRoute,
} as any)

const MfaRoute = MfaImport.update({
  id: '/mfa',
  path: '/mfa',
  getParentRoute: () => rootRoute,
} as any)

const CashRedemptionRoute = CashRedemptionImport.update({
  id: '/cash-redemption',
  path: '/cash-redemption',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cash-redemption': {
      id: '/cash-redemption'
      path: '/cash-redemption'
      fullPath: '/cash-redemption'
      preLoaderRoute: typeof CashRedemptionImport
      parentRoute: typeof rootRoute
    }
    '/mfa': {
      id: '/mfa'
      path: '/mfa'
      fullPath: '/mfa'
      preLoaderRoute: typeof MfaImport
      parentRoute: typeof rootRoute
    }
    '/shopping-cart': {
      id: '/shopping-cart'
      path: '/shopping-cart'
      fullPath: '/shopping-cart'
      preLoaderRoute: typeof ShoppingCartImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cash-redemption': typeof CashRedemptionRoute
  '/mfa': typeof MfaRoute
  '/shopping-cart': typeof ShoppingCartRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cash-redemption': typeof CashRedemptionRoute
  '/mfa': typeof MfaRoute
  '/shopping-cart': typeof ShoppingCartRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cash-redemption': typeof CashRedemptionRoute
  '/mfa': typeof MfaRoute
  '/shopping-cart': typeof ShoppingCartRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/cash-redemption' | '/mfa' | '/shopping-cart' | '/about'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cash-redemption' | '/mfa' | '/shopping-cart' | '/about'
  id:
    | '__root__'
    | '/'
    | '/cash-redemption'
    | '/mfa'
    | '/shopping-cart'
    | '/about'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CashRedemptionRoute: typeof CashRedemptionRoute
  MfaRoute: typeof MfaRoute
  ShoppingCartRoute: typeof ShoppingCartRoute
  AboutLazyRoute: typeof AboutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CashRedemptionRoute: CashRedemptionRoute,
  MfaRoute: MfaRoute,
  ShoppingCartRoute: ShoppingCartRoute,
  AboutLazyRoute: AboutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cash-redemption",
        "/mfa",
        "/shopping-cart",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cash-redemption": {
      "filePath": "cash-redemption.tsx"
    },
    "/mfa": {
      "filePath": "mfa.tsx"
    },
    "/shopping-cart": {
      "filePath": "shopping-cart.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
