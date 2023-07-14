import {useContext} from "react";
import Layout from "../Layout";
import Logo from "../Logo";
import Nav from "../Nav";
import {Search} from "../Form";

import MainCtx from "../../context/main";

import menu from "../../assets/data/menu.json";

import "./index.css";

const Header = () => {
    const {screen} = useContext(MainCtx);
    return (
        <header className="header">
            <Layout>
                <Logo/>
                <Search/>
                {screen < 1064
                    ? <>
                        <button className="card__btn">
                            <i className="lni lni-menu"/>
                        </button>
                        <Nav menu={menu.header}/>
                    </>
                    : <Nav menu={menu.header}/>
                }
            </Layout>
        </header>
    )
}

export default Header;