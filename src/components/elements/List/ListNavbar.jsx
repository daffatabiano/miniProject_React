/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ListNavbar = (props) => {
    const {navbarItems} = props;
    return (
        <>
            <li className="nav-item d-flex align-items-center">
                <Link className="scName" to={'/'}>
                    {navbarItems}
                </Link>
            </li>
        </>
    );
}

export default ListNavbar;