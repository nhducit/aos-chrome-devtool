import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '../components/button'
import * as v from 'valibot'

const mfaSearchSchema = v.object({
  type: v.picklist(['cash_redemption', 'shopping_cart'])
})

export const Route = createFileRoute('/mfa')({
  component: MFA,
  validateSearch: mfaSearchSchema
})

function MFA() {
  const { type } = Route.useSearch()
  const navigate = useNavigate({ from: '/mfa' })

  return (
    <div className="p-2">
      {
        type === 'cash_redemption' ? <h1>MFA Challenge for Cash Redemption</h1> : <h1>MFA Challenge for Shopping Cart</h1>
      }

      <Button
        onClick={() => {
          // appEventSubject.next({ type: 'mfa_success' })
          if (type === 'cash_redemption') {
            navigate({ to: '/cash-redemption', search: { status: 'success' } })
          } else {
            navigate({ to: '/shopping-cart', search: { status: 'success' } })
          }
        }}
      >
        Complete MFA
      </Button>
    </div>
  )
}
