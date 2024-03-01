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

  return (
    <div>
      <Navbar />
      <h1>Fresh Beans</h1>
      {product.map((item) => (
        <div key={item.id}>


          <div className="container  justify-content-center">
            <div className="row">
              <div className="col-4 d-flex">
                <div className="card text-black move-up mb-3" >
                  <div className="card-header">Web Development</div>
                  <div className="card-body">
                    <h5 className="card-title">Front End + Backend</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-primary center">View our curriculum</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product;