import { NavLink } from "react-router-dom";
import './NavItems.css';

const NavItems = () => {
    return (
        <div>
            <NavLink
                to="/signin"
                className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                <p> Sign In</p>
            </NavLink>
        </div>
    );
};

export default NavItems;