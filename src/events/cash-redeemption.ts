import { combineLatest, filter } from "rxjs";
import { appEventSubject } from "./app-event-subject";
import { router } from "../router";
import { shouldStartMfaChallenge } from "./mfa";

combineLatest([
  appEventSubject.pipe(
    filter((event) => event.type === "init_checkout_cashback_redemption")
  ),
  appEventSubject.pipe(filter((event) => event.type === "mfa_challenge")),
]).subscribe(() => {
  console.log("navigating to /mfa with type cash_redemption");
  debugger;
  window.location.href = "/mfa?type=cash_redemption";
});

appEventSubject
  .pipe(
    filter((event) => event.type === "attempt_checkout_cashback_redemption")
  )
  .subscribe(() => {
    if (shouldStartMfaChallenge()) {
      console.log("emitted event mfa for cash redemption");
      appEventSubject.next({ type: "mfa_challenge" });
    }
  });

console.log("registered cash-redeemption");
