import { Link } from 'react-router-dom';
import '../style.css';
import { useState } from 'react';
import Button from './elements/button';
import LogoImage from './elements/LogoImage';
import UnderListed from './elements/List/UnderListed';
import ListNavbar from './elements/List/ListNavbar';
import Dropdown from './elements/List/DropdownList';
import DropDownItem from './elements/List/DropdownList/DropdownItem';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY <= 40) {
            setColor(false);
        } else {
            setColor(true);
        }
    };
    window.addEventListener('scroll', changeColor);

    return (
        <div className="navbar">
            <div className="navbar-expand-sm fixed-top ">
                <div className={color ? 'navbar navbar-scrolled' : 'navbar'}>
                    <Link className="navbar-brand nav-link ps-4" to={'/'}>
                        <LogoImage />
                    </Link>
                    <button
                        className="navbar-toggler m-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span>
                            <i className="bi bi-list"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse " id="mynavbar">
                        <UnderListed>
                            <ListNavbar navbarItems="Home" />
                            <ListNavbar navbarItems="About" />
                            <Dropdown menu="Menu">
                                <DropDownItem textfill="Cool Drink" />
                                <DropDownItem textfill="Hot Drink" />
                            </Dropdown>
                            <Dropdown menu="Product">
                                <DropDownItem textfill="Beans" />
                            </Dropdown>
                        </UnderListed>

                        <Button classname="btn">
                            <i className="bi bi-person-fill"></i> Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
