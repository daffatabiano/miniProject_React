import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="aboutHomepage d-flex text-center">
            <Navbar />
            <img className="imageHeader img-fluid d-block" src={"https://th.bing.com/th/id/OIG2.ZL5vpPf5ibt4izl0cZWo?pid=ImgGn"} alt="" />
        
                <h1 className="position-absolute" >🌵Welcome to Our Saloon🌵</h1>
                {/* <img className="imageAbout" src={"https://th.bing.com/th/id/OIG2.RRH_P7CbNXQN6LsZN8PX?pid=ImgGn"} alt="" /> */}
                <div className="contentAbout2">
                    <h2 className="d-flex">Why You must Come ? <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">🤠</button></h2>
                    <div style={{ height: "120px" }}>
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="card card-body" style={{ width: "300px" }}>
                                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default About;