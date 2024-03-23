/* eslint-disable react/prop-types */
const FooterListed = (props) => {
    const {
        children,
        style = 'col-md-4 d-flex justify-content-between w-100',
    } = props;
    return (
        <>
            <div className={`col-xl-4 ${style} mb-30`}>{children}</div>
        </>
    );
};

const FooterCtaList = (props) => {
    const { title, text } = props;
    return (
        <div className="single-cta ">
            <i className="fas fa-map-marker-alt"></i>
            <div className="cta-text">
                <h4>{title}</h4>
                <span>{text}</span>
            </div>
        </div>
    );
};

const Widget = (props) => {
    const { text } = props;
    return (
        <>
                <div className="footer-widget">
                    <ul>
                        <li>
                            <a href="#">{text}</a>
                        </li>
                    </ul>
                </div>
           
        </>
    );
};

const WidgetHeader = (props) => {
    const { title } = props;
    return (
        <>
            <div className="footer-widget-heading">
                <h3>{title}</h3>
            </div>
        </>
    );
};
FooterListed.WidgetHeader = WidgetHeader;
FooterListed.Widget = Widget;
FooterListed.FooterCtaList = FooterCtaList;
export default FooterListed;
