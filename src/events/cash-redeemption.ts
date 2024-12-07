import { combineLatest, filter } from "rxjs";
import { appEventSubject } from "./app-event-subject";
import { router } from "../router";

combineLatest([
  appEventSubject.pipe(filter((event) => event.type === "checkout")),
  appEventSubject.pipe(
    filter((event) => event.type === "attempt_checkout_cashback_redemption")
  ),
]).subscribe(() => {
  console.log("navigating to /mfa with type cash_redemption");
  debugger;
  router.navigate({ to: "/mfa", search: { type: "cash_redemption" } });
});
