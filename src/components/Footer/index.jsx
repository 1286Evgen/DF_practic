import Layout from "../Layout";
import Logo from "../Logo";
import Nav from "../Nav";

import menu from "../../assets/data/menu.json";
import "./index.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Layout dt={3}>
                <div className="footer__sign">
                    <Logo position="vertical"/>
                    <div className="footer__text">
                        <span>Make by Evgen  </span>
                        <span>{new Date().getFullYear()}</span>
                    </div>
                </div>
                <div className="footer__menu">
                    <Nav menu={menu.footer} position="vertical"/>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;