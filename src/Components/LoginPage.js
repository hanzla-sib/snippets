import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, login } = useContext(AuthContext);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <div
        style={{
          display: "flex",
          height: "97vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        This is my login page
      </div>
    </div>
  );
};

export default LoginPage;
