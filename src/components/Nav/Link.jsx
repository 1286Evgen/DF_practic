import {useContext} from "react";
import {Link as RouterLink} from "react-router-dom";

import MainCtx from "../../context/main";
const Link = ({
    path,
    title = "",
    position = "horizontal", // vertical
    imgType = "", // icon | image
    imgPath,
    children,
    visibility = "all" // user | no-user
}) => 

export default Link;