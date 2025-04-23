import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link to="/" className="mr-6">
            Home
          </Link>
          <Link to="/register" className="mr-6">
            Register
          </Link>
          <Link to="/login" className="mr-6">
            Login
          </Link>

          {isAuthenticated && (
            <Link to="/dashboard" className="mr-6">
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
