import Link from "./Link";

import "./index.css";

const Nav = ({
    menu,
    position = "horizontal"
}) => {
    return (
        <nav className={`nav nav_${position}`}>
            {menu.map((el, i) => <Link key={i} {...el}>
                {el.subLinks && 
                    <div className="nav nav_submenu nav_vertical">
                        {el.subLinks.map((link, i) => <Link key={i} {...link}/>)}
                    </div>}
            </Link>)}
        </nav>
    )
}