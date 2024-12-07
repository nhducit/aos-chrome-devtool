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
        type === 'cash_redemption' ? <h1
          className='text-2xl font-bold'
        >MFA Challenge for Cash Redemption</h1> : <h1
          className='text-2xl font-bold'
        >MFA Challenge for Shopping Cart</h1>
      }
      <p>
        This is a MFA challenge page in another FE application. For the sake of this demo, we will have it in the same FE application.
      </p>

      <Button
        onClick={() => {
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
