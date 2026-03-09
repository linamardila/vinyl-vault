import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav>
      <Link to="/" className="logo">Vinyl Vault</Link>
      <div className="nav-links">
        <Link to="/collection">My Collection</Link>
        <Link to="/stats">Stats</Link>
        {currentUser ? (
          <div className="user-section">
            <span className="user-email">{currentUser.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;