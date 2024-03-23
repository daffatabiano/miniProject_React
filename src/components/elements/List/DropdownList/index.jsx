/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const { menu, children } = props;
    return (
        <>
            <li className="nav-item dropdown d-flex align-items-center">
                <Link
                    className="nav-link dropdown-toggle scName"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={'/Menu'}
                >
                    {menu}
                </Link>
                <ul className="dropdown-menu">{children}</ul>
            </li>
        </>
    );
};

export default Dropdown;
