import FooterListed from '../elements/ParsingFooter/FooterList';

const FooterLinks = (props) => {
    const { children } = props;
    return (
        <>
            <FooterListed style="col-md-6">{children}</FooterListed>
        </>
    );
};

const Widget = () => {
    return (
        <>
            <FooterListed.WidgetHeader title="Useful Links" />
            <FooterListed.Widget text="Home" />
            <FooterListed.Widget text="About" />
            <FooterListed.Widget text="Services" />
            <FooterListed.Widget text="Portfolio" />
            <FooterListed.Widget text="Contact" />
            <FooterListed.Widget text="About Us" />
            <FooterListed.Widget text="Our Service" />
            <FooterListed.Widget text="Expert Team" />
            <FooterListed.Widget text="Contact Us" />
            <FooterListed.Widget text="Latest News" />
        </>
    );
};

const FooterSubscribe = (props) => {
    const { children } = props;
    return (
        <>
            <FooterListed.WidgetHeader title="Subscribe" />
            {children}
            <div className="footer-text mb-25">
                <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                </p>
            </div>
        </>
    );
};

FooterLinks.Widget = Widget;
FooterLinks.FooterSubscribe = FooterSubscribe;

export default FooterLinks;
