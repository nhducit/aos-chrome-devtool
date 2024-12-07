import { createFileRoute } from '@tanstack/react-router'
import { appEventSubject } from '../events/app-event-subject'
import { Button } from '../components/button'

import * as v from 'valibot'
import { useState } from 'react'

const cashRedemptionSearchSchema = v.object({
  status: v.fallback(v.picklist(['init', 'success']), 'init')
})

export const Route = createFileRoute('/cash-redemption')({
  component: CashRedemption,
  validateSearch: cashRedemptionSearchSchema
})

function CashRedemption() {
  const { status } = Route.useSearch()
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="p-2">
      {
        status === 'init' ? <h1>Cash Redemption</h1> : <h1>Cash Redemption Success</h1>
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
                debugger;
                appEventSubject.next({
                  type: "attempt_checkout_cashback_redemption",
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
