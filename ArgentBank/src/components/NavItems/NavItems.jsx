import { NavLink } from "react-router-dom";
import './NavItems.css';
import PropTypes from "prop-types";

const NavItems = ({navTo, navIcon, navText}) => { /**ajouter une prop display pour définir si un navLink est affiché ou masqué */
    return (
        <div>
            <NavLink
                to={navTo}
                className="main-nav-item">
                <i className={navIcon}></i>
                <p>{navText}</p>
            </NavLink>
        </div>
    );
};

export default NavItems;

NavItems.propTypes = {
    navTo: PropTypes.string.isRequired,
    navIcon: PropTypes.string.isRequired,
    navText: PropTypes.string.isRequired,
};