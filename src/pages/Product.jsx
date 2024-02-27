import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
const Product = () => {
    const [product, setProduct] = useState([]);
    const getProduct = () => {
        axios
            .get('https://fake-coffee-api.vercel.app/api')
            .then((res) => {
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getProduct()
    }, [])

    return(
        <div>
            <Navbar />
            <h1>Fresh Beans</h1>
            {product.map((item) => (
                <div key={item.id}>
                    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={item.image_url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={item.image_url} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={item.image_url} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                </div>
            ))}
        </div>
    )
}

export default Product;