import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import BuyButton from "../components/BuyButton";


const Menu =()=>{

    const [coldMenus,setColdMenus] = useState([]);
    const [hotMenus,setHotMenus] = useState([]);
    const getColdMenu = () => {
        axios.get('https://api.sampleapis.com/coffee/iced')
        .then(res => setColdMenus(res.data))
        .catch(err => {
            console.log(err);
        })
    }
    const getHotMenu = () => {
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then(res => setHotMenus(res.data))
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getColdMenu()
    }, []);
    useEffect(() => {
        getHotMenu()
    }, []);

    return (
        <div className="menuPages">
            <Navbar/>
            <div className="coldMenu">

            <div className="coldMenu container text-center p-5 mt-5">
            <h1><span>CooL</span> Energy⚡</h1>
            <h5>time to charge your self</h5>
            <div className="d-flex flex-row flex-wrap justify-content-between">
        {coldMenus.map((items,index) => (
            <div className="card col-4 m-4" key={index}>
                <div className="card-body">
                <img  className="card-img-top w-100" src={items.image} alt={items.title} style={{width: "70px"}}/>
                <h3 className="card-title">{items.title}</h3>
                <button type="button" className="btn btn-warning" id="liveToastBtn">Charge!</button>
                </div>
            </div>
        ))}
            </div>

            </div>

            </div>
            <div className="hotMenu">

            <div className="hotMenu container text-center p-5 mt-5">
            <h1><span>HoT</span> Energy⚡</h1>
            <h5>time to charge your self</h5>
            <div className="d-flex flex-row flex-wrap justify-content-between">
        {hotMenus.map((items,index) => (
            <div className="card col-4 m-4" key={index}>
                <div className="card-body">
                <img  className="card-img-top w-100" src={items.image} alt={items.title} style={{width: "70px"}}/>
                <h3 className="card-title">{items.title}</h3>
                <button type="button" className="btn btn-warning">Charge!</button>
                </div>
            </div>
        ))}
            </div>

            </div>

            </div>
            <BuyButton/>
        </div>
    )
}
export default Menu;