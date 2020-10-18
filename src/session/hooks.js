import React from "react";

import SessionContext from "./context";

export function useSessionActions() {
  const {
    actions: { signIn, signOut },
  } = React.useContext(SessionContext);

  return { signIn, signOut };
}

export function useUser() {
  const {
    state: { user },
  } = React.useContext(SessionContext);

  return user;
}
