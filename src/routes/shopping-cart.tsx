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
        status === 'init' ? <h1
          className='text-2xl font-bold'
        >Shopping Cart</h1> : <h1
          className='text-2xl font-bold'
        >Shopping Cart Success</h1>
      }

      {
        status === 'init' ? (
          <div className='mt-8'>
            <div className='flex flex-col gap-2 w-[300px]'>
              <Button
                onClick={() => {
                  setIsReady(true)
                  appEventSubject.next({
                    type: "init_checkout_shopping_cart",
                  });
                }}
              >
                Init Shopping Cart
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
          </div>
        ) : null
      }
    </div>
  )
}
