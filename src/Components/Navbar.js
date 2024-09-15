// NavBar.js
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const NavBar = () => {
  const { isLoggedIn, logout,login } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default NavBar;