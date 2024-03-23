import { Link } from 'react-router-dom';
import '../style.css';
import { useState } from 'react';
import LogoImage from './elements/LogoImageo';
import Navbaritem from './elements/NavbarItem';
import ResponsiveButton from './elements/button/ResponsiveButton';

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
                    <ResponsiveButton />
                    <Navbaritem />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
