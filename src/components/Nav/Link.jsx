import {useContext} from "react";
import {Link as RouterLink} from "react-router-dom";

import MainCtx from "../../context/main";

const LinkItem = ({
    path,
    position,
    as,
    children
}) => {
    return (
        <>
            {as === "link" && 
                <RouterLink
                    to={path}
                    className={`nav__link nav__link_${position}`}
                    >
                        {children}
                </RouterLink>}   
            {as === "a" && 
                <RouterLink
                    href={path}
                    target="_blank"
                    rel="norefferrer"
                    className={`nav__link nav__link_${position}`}
                    >
                        {children}
                </RouterLink>} 
        </>
    )
}

const Link = ({
    path,
    title = "",
    position = "horizontal", // vertical horizontal
    imgType = "", // icon | image
    imgPath,
    children,
    visibility = "all", // user | no-user
    as = "link",
    caption = false
}) => {
    const {userId} = useContext(MainCtx);
    return (
        <>
            {
                (
                    visibility === "all"
                    || (visibility === "user" && userId)
                    || (visibility === "no-user" && !userId)
                ) && <div className={`nav__item ${caption ? "nav__item_caption" : ""}`}>
                    <LinkItem path={path} as={as}
                        position={position}>
                        {imgType === "image" && <img
                            src={imgPath}
                            alt={title}
                            className="nav__image"
                            />    
                        }
                        {imgType === "icon" && <i className={`nav__icon ${imgPath}`}/>}
                        {title}
                    </LinkItem>
                    {children}
                </div>
            }
        </>
    )
}

export default Link;