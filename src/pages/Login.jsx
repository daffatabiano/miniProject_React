import { useState } from "react";
import "../style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notif, setNotif] = useState();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleLogin = () => {
        const payload = {
            username: username,
            password: password,
        }
        axios
            .post("https://api.mudoapi.tech/login", payload)
            .then((res) => {
                const token = res?.data?.data?.token;
                localStorage.setItem("access_token", token)
                setLoading(false);
                if (token) {
                    setTimeout(() => {
                        navigate('/menu');
                    }, 2000);
                    setNotif("Login Success");
                }
            })
            .catch((err) => {
                console.log(err.response);
                setLoading(false)

                setNotif(err?.response?.data?.message);
            })
    }


    return (
        <body className="loginBody">
            <Navbar/>
        <div className="container Body p-5 d-flex shadow-lg ">
            <div className="container">
            <button className="btn w-25">Back </button>
            <div className="d-flex justify-content-start mt-3 ">
                <form className="bg-light rounded-3 p-3 w-100 ">
                    <div className="form-floating pb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                        <Link id="passwordHelp" className="form-text">forget your password?</Link>
                        <div className="form-check mt-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" to="flexCheckDefault">
                                Remember Me!
                            </label>
                        </div>
                        <p id="register" className="form-text">Do not have an account? <Link to="/register">Register</Link></p>
                        <button className="btn btn-warning mt-3 w-25">S U B M I T</button>
                    </div>
                </form>
            </div>
            </div>
                <img className="container register max-width-100 img-fluid float-end" src="https://th.bing.com/th/id/OIG3._1uwnsjYhkfg_IxigNJx?pid=ImgGn" alt="" />
        </div>
        </body>
    )
}

export default Login;