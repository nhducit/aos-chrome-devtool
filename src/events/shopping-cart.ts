import { combineLatest, filter } from "rxjs";
import { appEventSubject } from "./app-event-subject";
import { shouldStartMfaChallenge } from "./mfa";

combineLatest([
  appEventSubject.pipe(
    filter((event) => event.type === "init_checkout_shopping_cart")
  ),
  appEventSubject.pipe(filter((event) => event.type === "mfa_challenge")),
]).subscribe(() => {
  console.log("navigating to /mfa with type shopping_cart");
  debugger;
  window.location.href = "/mfa?type=shopping_cart";
});

appEventSubject
  .pipe(filter((event) => event.type === "attempt_checkout_shopping_cart"))
  .subscribe(() => {
    if (shouldStartMfaChallenge()) {
      console.log("emitted event mfa for shopping cart");
      appEventSubject.next({ type: "mfa_challenge" });
    }
  });

console.log("registered shopping-cart");
