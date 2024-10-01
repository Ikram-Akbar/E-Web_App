import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const brandName = "M/S Sharif Electric";
    const navItems = [
        { path: "/home", name: "Home" },
        { path: "/products", name: "Products" },
        ...(user ? [{ path: "/cart", name: "Cart" }] : []),  // Add Cart only if user is logged in
        { path: "/blogs", name: "Blogs" },
        { path: "/contact", name: "Contact" },
    ];

    const handleLogout = () => {
        logOutUser()
        .then((res)=>{
            console.log(res);
            toast.success("Log out successfully");
        })
        .catch((err)=>{
            toast.error(err);
        })
    }

    return (
        <Navbar sticky="top" expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand className="text-white">{brandName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navItems.map((item, idx) => (
                            <NavLink
                                key={idx}
                                to={item.path}
                                className={({ isActive }) => 
                                    isActive ? "nav-link-custom active-nav-link" : "nav-link-custom"
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        {user ? (
                            <>
                                <span className="text-white m-3">{user?.email}</span>
                                <button className="btn btn-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) => 
                                    isActive ? "nav-link-custom active-nav-link" : "nav-link-custom"
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
