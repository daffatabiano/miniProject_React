const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/OIG2.qah2LAzOBO0ICifGHaL5?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIG2.CYjC_YZ3ZCBFAg5d3HPL?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIG2.CLTaq.o.EKeLiZeJFDhD?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel