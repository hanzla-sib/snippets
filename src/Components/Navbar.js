// NavBar.js
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isLoggedIn, logout, login } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <div
          style={{
            display: "flex",
            listStyle: "none",
            padding: "3px",
            gap: 10,
          }}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
        </div>
      </nav>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
