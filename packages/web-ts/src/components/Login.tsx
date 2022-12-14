import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTokenResponseType, IKUICore } from "@indykiteone/jarvis-sdk-web";

interface IProps {
  setToken: (data: DataTokenResponseType) => void;
}

const Login: React.FC<IProps> = ({ setToken }) => {
  const navigate = useNavigate();

  const onSuccess = React.useCallback(
    (data: DataTokenResponseType) => {
      setToken(data);
      navigate("/authenticated");
    },
    [setToken, navigate],
  );

  useEffect(() => {
    IKUICore.render({
      renderElementSelector: ".login-container",
      onSuccess: onSuccess,
      redirectUri: "/callback",
      forgotPasswordPath: "/forgot",
      labels: {
        // username: "Custom Username",
        // password: "Custom Password",
        loginButton: "Custom Login with us!",
        // registerButton: "Custom Register",
        // forgotPasswordButton: "custom Forgot Password",
        // orOtherOptions: "Custom you can also continue with",
      },
      loginApp: JSON.parse(process.env.REACT_APP_LOGIN_APPS || "{}"),
    });
  });

  return (
    <div>
      <div className="login-container" style={{ width: 350 }} />
    </div>
  );
};

export default Login;
