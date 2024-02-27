import { useState } from "react";
import "../style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notify, setNotify] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            username: username,
            password: password,
        }
        setLoading(true)

        axios
            .post("https://api.mudoapi.tech/login", payload)
            .then((res) => {
                const data = res?.data?.data?.token;
                console.log(data);
                setTimeout(() => {
                    navigate("/")
                }, 3000);
                setNotify(res?.data?.message);
            })
            .catch((err) => {
                setNotify(err?.response?.data?.message);
            })
    }




    return (
        <body className="loginBody">
            <Navbar />
            <div className="container Body p-5 d-flex shadow-lg ">
                <div className="container">
                    <button className="btn w-25" onClick={() => navigate(-1)}>Back </button>
                    <div className="d-flex justify-content-start mt-3 ">
                        <form className="bg-light rounded-3 p-3 w-100 ">
                            {notify && <div className="alert alert-success">{notify}</div>}
                            <div className="form-floating pb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleUsername} />
                                <label htmlFor="floatingInput">Email address</label>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="form-floating mt-2">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePassword} />
                                <label htmlFor="floatingPassword">Password</label>
                                <Link id="passwordHelp" className="form-text">forget your password?</Link>
                                <div className="form-check mt-4">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" to="flexCheckDefault">
                                        Remember Me!
                                    </label>
                                </div>
                                <p id="register" className="form-text">Do not have an account? <Link to="/register">Register</Link></p>
                                <button onClick={handleSubmit} className="btn btn-warning mt-3 w-25" disabled={loading ? true : false}>{loading ? "Loading..." : "Login"}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="registerImage ms-4 max-width-100 img-fluid position-sticky" src="https://th.bing.com/th/id/OIG3._1uwnsjYhkfg_IxigNJx?pid=ImgGn" alt="" />

                    <div className="socialMediaComponent position-absolute bottom-0 ">
                    <ul className="socialMedia border border-2 border-start-0 border-end-0 border-light p-1 align-items-center rounded shadow">
                    <h6 className="text-center text-light ">or login with</h6>
                        <li className="children">
                            <Link href="#">
                                <i className="fab fa-facebook-f icon"></i></Link>
                        </li>
                        <li className="children">
                            <Link href="#"><i className="fab fa-twitter icon"></i></Link>
                        </li>
                        <li className="children">
                            <Link href="#"><i className="fab fa-linkedin-in icon"></i></Link></li>
                        <li className="children">
                            <Link href="#"><i className="fab fa-google-plus-g icon"></i></Link></li>
                    </ul>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Login;