import { Subject } from "rxjs";

export const appEventSubject = new Subject<{
  type:
    | "attempt_checkout_cashback_redemption"
    | "attempt_checkout_shopping_cart"
    | "checkout"
    | "mfa_challenge"
    | "mfa_success";
}>();
