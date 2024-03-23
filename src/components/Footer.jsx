import '../footer.css';
import FooterListed from './elements/ParsingFooter/FooterList';

const Footer = () => {
    return (
        <div>
            {/* footer */}
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            {/* making parting of a Find Us/ Call us /Mail us
                            START */}
                            <FooterListed>
                                <FooterListed.singleCta
                                    title="Find Us"
                                    text="Central Jakarta, Jakarta Indonesia"
                                />
                                <FooterListed.singleCta
                                    title="Call Us"
                                    text="(+62) 123 456 789"
                                />
                                <FooterListed.singleCta
                                    title="Mail Us"
                                    text="WjV2O@example.com"
                                />
                            </FooterListed>

                            {/* END */}
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img
                                                src="../src/assets/logoFooter.png"
                                                className="img-fluid"
                                                alt="logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="footer-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consec
                                            tetur adipisicing elit, sed do
                                            eiusmod tempor incididuntut consec
                                            tetur adipisicing elit,Lorem ipsum
                                            dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#">
                                            <i className="fab fa-facebook-f facebook-bg"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter twitter-bg"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g google-bg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* making a part footer-widget on Useful Links Named 
                            START*/}

                            {/* END */}

                            {/* making a parsing footer widget on Subscribe Named
                                START */}
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>
                                            Don’t miss to subscribe to our new
                                            feeds, kindly fill the form below.
                                        </p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input
                                                type="text"
                                                placeholder="Email Address"
                                            />
                                            <button>
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* END */}
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>
                                        Copyright &copy; 2024, All Right
                                        Reserved{' '}
                                        <a href="https://www.linkedin.com/in/daffatabiano/">
                                            Daffa Tabiano
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#">Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
