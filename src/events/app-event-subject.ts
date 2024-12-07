import { Subject } from "rxjs";

export const appEventSubject = new Subject<{
  type:
    | "init_checkout_cashback_redemption"
    | "attempt_checkout_cashback_redemption"
    | "init_checkout_shopping_cart"
    | "attempt_checkout_shopping_cart"
    | "checkout"
    | "mfa_challenge"
    | "mfa_success";
}>();

appEventSubject.subscribe((event) => {
  console.log("emitted event", event);
});
