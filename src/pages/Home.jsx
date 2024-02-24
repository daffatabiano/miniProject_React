import Navbar from "../components/Navbar";
import About from "./About";
import "../style.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
        <div className="homeSection position-absolute top-0">
            <div className="homeContent">
        <h1>Are You Sure Just A One-Cup? for <span>BestCoffee?</span></h1>
        <p>I told you that exactly Not/Enough!.
             Do you want know about what is the O-C?N/E!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis itaque quibusdam nulla?</p>
        <button to={"/"}>Lets Fun!</button>
            </div>
        </div>
        </div>
    )

}

export default Home;