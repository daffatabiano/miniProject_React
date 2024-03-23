/* eslint-disable react/prop-types */
const UnderListed = (props) => {
    const { children } = props;
    return (
        <>
            <ul className="navbar-nav d-flex ms-auto p-2">{children}</ul>
        </>
    );
};

export default UnderListed;
