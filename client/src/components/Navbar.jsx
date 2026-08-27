import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

const Navbar = () => {
    const { isAuth, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    // NavLink gives us isActive automatically based on the current route
    const linkClass = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link";

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <NavLink to="/" className="navbar-brand">
                    Book Management System
                </NavLink>

                <div className="navbar-links">

                    <NavLink to="/" end className={linkClass}>
                        Home
                    </NavLink>

                    {isAuth && (
                        <NavLink to="/books" className={linkClass}>
                            Books
                        </NavLink>
                    )}

                    {!isAuth ? (
                        <>
                            <NavLink to="/login" className="btn btn-outline">
                                Login
                            </NavLink>

                            <NavLink to="/register" className="btn btn-primary">
                                Register
                            </NavLink>
                        </>
                    ) : (
                        <button
                            className="btn btn-logout"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;