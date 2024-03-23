/* eslint-disable react/prop-types */
const FooterListed = (props) => {
    const { children } = props;
    return (
        <>
            <div className="col-xl-4 col-md-4 mb-30">{children}</div>
        </>
    );
};

const singleCta = (props) => {
    const { title, text } = props;
    return (
        <>
            <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                    <h4>{title}</h4>
                    <span>{text}</span>
                </div>
            </div>
        </>
    );
};

FooterListed.singleCta = singleCta;
export default FooterListed;
