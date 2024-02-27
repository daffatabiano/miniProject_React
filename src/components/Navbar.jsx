import { Link } from "react-router-dom";
import '../style.css';
import Logo from "../../logo.jpg";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY <=40) {
            setColor(false)
        } else {
            setColor(true)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className="navbar">
            <div className="navbar-expand-sm fixed-top">
                <div className={color? "navbar navbar-scrolled":"navbar"}>
                <Link className="navbar-brand nav-link ps-4" to={"/"} >
                    <img src={Logo} alt="Logo-Coffee" width="50" height="35" />
                    <span>O-C?N<b>/E!</b></span>
                </Link>
                <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span><i className="bi bi-list"></i></span>
                </button>

                <div className="collapse navbar-collapse " id="mynavbar">
                    <ul className="navbar-nav d-flex ms-auto p-2">
                        <li className="nav-item d-flex align-items-center">
                            <Link className="scName" to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown d-flex align-items-center">
                            <Link className="nav-link dropdown-toggle scName" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={"/Menu"}>
                                Menu
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/Menu"}> Iced Coffee
                                </Link>
                                </li>
                                <li><Link className="dropdown-item" href="#"> Hot Coffee
                                </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link className="scName" to={"/About"}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link className="scName" to={"/"}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item dropdown d-flex align-items-center">
                            <Link className="nav-link dropdown-toggle scName" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={"/Product"}>
                                Products
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/Product"}> Beans
                                </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                    <Link to={"/login"}>
                    <button className="btn" ><i className="bi bi-person-fill"></i> Login</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;