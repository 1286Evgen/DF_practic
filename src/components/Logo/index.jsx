import {Corgi} from "../../assets/images";
import {Link} from "../Nav";

import "./index.css";

const Logo = ({
    position = "vertical" // horizontal vertical

}) => {
    return (
        <div className="logo">
            <Link
                path="/"
                title="DogFood"
                imgType="image"
                imgPath={Corgi.logo}
                position={position}
            />
        </div>
    )
}

export default Logo;