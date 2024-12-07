import { combineLatest, filter } from "rxjs";
import { appEventSubject } from "./app-event-subject";
import { router } from "../router";

// listen the subject
// combineLast these 2 events are triggered together, then open https://www.google.com/
// init_shopping_cart, checkout

combineLatest([
  appEventSubject.pipe(filter((event) => event.type === "checkout")),
  appEventSubject.pipe(
    filter((event) => event.type === "attempt_checkout_shopping_cart")
  ),
]).subscribe(() => {
  console.log("navigating to /mfa with type shopping_cart");
  debugger;
  router.navigate({ to: "/mfa", search: { type: "shopping_cart" } });
});
