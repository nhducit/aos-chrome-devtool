// fake mfa challenge logic
// in real world, this would be a call to the server to check if the user has a MFA challenge
export function shouldStartMfaChallenge() {
  // return Math.random() < 0.5;

  // always return true for now for the sake of demo
  return true;
}
