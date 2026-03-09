import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">Vinyl Vault</Link>
      <div className="nav-links">
        <Link to="/collection">My Collection</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;