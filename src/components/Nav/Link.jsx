import {useContext} from "react";
import {Link as RouterLink} from "react-router-dom";

import MainCtx from "../../context/main";
const Link = ({
    path,
    title = "",
    position = "horizontal", // vertica
    imgType = "", // icon | image
    imgPath,
    children,
    visibility = "all" // user | no-user
}) => {
    const {userId} = useContext(MainCtx);
    return (
        <>
            {
                (
                    visibility === "all"
                    || (visibility === "user" && userId)
                    || (visibility === "no-user" && !userId)
                ) && <div className="nav__item">
                    <RouterLink
                        to={path}
                        className={`nav__link nav__link_${position}`}
                    >
                        {imgType === "image" && <img
                            src={imgPath}
                            alt={title}
                            className="nav__image"
                            />    
                        }
                        {imgType === "icon" && <i className={`nav__icon${imgPath}`}/>}
                        {title}
                    </RouterLink>
                    {children}
                </div>
            }
        </>
    )
}

export default Link;