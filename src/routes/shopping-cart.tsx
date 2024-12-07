import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/button'
import { appEventSubject } from '../events/app-event-subject'

import * as v from 'valibot'
import { useState } from 'react'

const shoppingCartSearchSchema = v.object({
  status: v.fallback(v.picklist(['init', 'success']), 'init')
})

export const Route = createFileRoute('/shopping-cart')({
  component: ShoppingCart,
  validateSearch: shoppingCartSearchSchema
})

function ShoppingCart() {
  const { status } = Route.useSearch()
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="p-2">
      {
        status === 'init' ? <h1>Shopping Cart</h1> : <h1>Shopping Cart Success</h1>
      }

      {
        status === 'init' ? (
          <div>
            <Button
              onClick={() => {
                setIsReady(true)
              }}
            >
              Init Cash Redemption
            </Button>
            <Button
              onClick={() => {
                appEventSubject.next({
                  type: "attempt_checkout_shopping_cart",
                });
              }}
              disabled={!isReady}
            >
              Checkout
            </Button>
          </div>
        ) : null
      }
    </div>
  )
}
