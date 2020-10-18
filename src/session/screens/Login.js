import React from "react";
import LoginScreen from "../../../components/Login";

const PreLogin = ({ login, status }) => (
  <>
    {status === "init" && (
      <span>
        {" "}
        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
      </span>
    )}
    {status === "restored" && <LoginScreen login={login} />}
  </>
);
export default PreLogin;
