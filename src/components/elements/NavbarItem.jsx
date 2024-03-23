import Dropdown from './List/DropdownList';
import DropDownItem from './List/DropdownList/DropdownItem';
import ListNavbar from './List/ListNavbar';
import UnderListed from './List/UnderListed';
import Button from './button';

const Navbaritem = () => {
    return (
        <>
            <div className="collapse navbar-collapse " id="mynavbar">
                <UnderListed>
                    <ListNavbar navbarItems="Home" />
                    <ListNavbar navbarItems="About" />
                    <Dropdown menu="Menu">
                        <DropDownItem textfill="Cool Drink" />
                        <DropDownItem textfill="Hot Drink" />
                    </Dropdown>
                    <Dropdown menu="Product">
                        <DropDownItem textfill="Beans" />
                    </Dropdown>
                </UnderListed>

                <Button classname="btn">
                    <i className="bi bi-person-fill"></i> Login
                </Button>
            </div>
        </>
    );
};

export default Navbaritem;
