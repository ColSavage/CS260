import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-light">
              <div class="container-fluid">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/bobs">Bob's Burgers</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/simpsons">The Simpsons</Link>
                  </li>
                </ul>
              </div>
            </nav>
        
            <Outlet />
        </>
    );
}

export default NavBar;