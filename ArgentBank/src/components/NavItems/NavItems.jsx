import { NavLink } from "react-router-dom";
import './NavItems.css';
import PropTypes from "prop-types";

const NavItems = ({ navTo, navIcon, navText, isSpan = false, onClick }) => {
    /**ajouter une prop display pour définir si un navLink est affiché ou masqué */

    const Content = () => (
        <>
            <i className={navIcon}></i>
            <p>{navText}</p>
        </>
    );

    return (
        <div>
            {isSpan ? (
                <span className="nav-item">
                    <Content />
                </span>
            ) : onClick ? (
                <button onClick={onClick} className="nav-item log-out">
                    <Content />
                </button>
            ) : (
                <NavLink to={navTo} className="nav-item log-in">
                    <Content />
                </NavLink>
            )}
        </div>
    );
};

export default NavItems;

NavItems.propTypes = {
    navTo: PropTypes.string.isRequired,
    navIcon: PropTypes.string.isRequired,
    navText: PropTypes.string.isRequired,
    isSpan: PropTypes.bool,
    onClick: PropTypes.func,
};