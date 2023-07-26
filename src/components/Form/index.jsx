import Input from "./Input";
import Search from "./Search";
import Select from "./Select";
import Textarea from "./Textarea";

import formData from "../../assets/data/form.json";

import "./index.css";

const Form = () => {
    /*const type = "user";
    const names = ["email", "name", "about", "password", "password-accept"];*/
    const type = "product";
    const names = ["name", "price", "discount", "description"]
    return (
        <form>
            {names.map(el => {
                const elData = formData[type][el];
                switch(elData.format) {
                    case "textarea":
                        return <Textarea key={el} name={el} {...elData}/>
                    case "select":
                        return <Select key={el} name={el} {...elData}/>
                    default:
                        return <Input key={el} name={el} {...elData}/>
                }
            })}
            <button type="submit">Отправить</button>
        </form>
    )
}

export {Input, Search, Select, Textarea};

export default Form;