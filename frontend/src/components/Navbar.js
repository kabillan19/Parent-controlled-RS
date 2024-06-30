import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { authData, setAuthData } = useContext(AuthContext);

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!authData ? (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/add-content">Add Content</Link></li>
            <li><Link to="/content-list">Content List</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
