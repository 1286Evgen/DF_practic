import React from 'react';
import "./index.css";

const Layout = ({
    mb = 1,
    dt = mb,
    gap = "normal",
    children,
    title
    }) => {
    let className = "layout";
    switch (mb) {
        case 2: className += " layout_2"; break;
        case 3: className += " layout_3"; break;
        case 4: className += " layout_4"; break;
        default: className += "";
    }
    switch (dt) {
        case 1: className += " layout_dt_1"; break;
        case 2: className += " layout_dt_2"; break;
        case 3: className += " layout_dt_3"; break;
        case 4: className += " layout_dt_4"; break;
        default: className += "";
    }
    switch (gap) {
        case "none": className += " layout_gap_none"; break;
        case "small": className += " layout_gap_small"; break;
        default: className += "";
    }
    return (
    <div className={className}>
        {title && <h2 className={`layout__title layout__title_${mb} layout__title_dt-${dt}`}>{title}</h2>}
        {children}
    </div>
    )
}

export default Layout;