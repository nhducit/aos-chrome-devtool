import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold">Welcome Home!</h1>
      <div className="mt-8 flex flex-col gap-2">
        <Link
          className='text-lg text-blue-500 underline'
          to="/cash-redemption" search={{ status: "init" }}>Cash Redemption</Link>
        <Link
          className='text-lg text-blue-500 underline'
          to="/shopping-cart" search={{ status: "init" }}>Shopping Cart</Link>
      </div>
    </div>
  )
}
