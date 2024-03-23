/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DropDownItem = (props) => {
    const { textfill } = props;
    return (
        <>
            <li>
                <Link className="dropdown-item" to={'/Menu'}>
                    {' '}
                    {textfill}
                </Link>
            </li>
        </>
    );
}

export default DropDownItem;