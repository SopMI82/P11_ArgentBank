import './NavLogo.css'

const NavLogo = () => {
    return (
        <div>
            <a className="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
        </div>
    );
};

export default NavLogo;