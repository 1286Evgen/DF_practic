import Layout from "../Layout";
import Logo from "Logo";
import Nav from "../Nav";
import {Search} from "../Form";
import menu from "../../assets/data/menu.json";

const Header = () => {
    return (
        <header className="header">
            <Layout>
            <Logo/>
            <Search/>
            <Nav menu={menu.header}/>
            </Layout>
        </header>
    )
}

export default Header;