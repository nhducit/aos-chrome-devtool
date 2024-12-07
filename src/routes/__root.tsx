import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link
                    to="/cash-redemption"
                    search={{ status: "init" }}
                    className="[&.active]:font-bold"
                >
                    Cash Redemption
                </Link>

                <Link to="/shopping-cart"
                    search={{ status: "init" }}
                    className="[&.active]:font-bold">
                    Shopping Cart
                </Link>

                {/* <Link to="/mfa" className="[&.active]:font-bold">
                    MFA
                </Link> */}
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})