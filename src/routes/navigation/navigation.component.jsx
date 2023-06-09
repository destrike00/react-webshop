import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/contact">
                        CONTACT
                    </Link>
                    <Link className="nav-link" to="/signin">
                        SIGN IN
                    </Link>
                    <Link className="nav-link" to="/cart">
                        CART LOGO
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;
