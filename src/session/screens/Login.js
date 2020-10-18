import React from "react";

const LoginScreen = ({ login, status }) => (
  <>
    {status === "init" && <span>Trying to restore authentication...</span>}
    {status === "restored" && <button onClick={login}>Login con Google</button>}
  </>
);
export default LoginScreen;