/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = (props) => {
    const {children, classname} = props;
    return (
        <div>
            <Link to={'/login'}>
                <button className={classname}>
                    {children}
                </button>
            </Link>
        </div>
    );
}

export default Button; 