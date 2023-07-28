import { useState } from "react";

import Input from "./fields/Input";
import Select from "./fields/Select";
import Textarea from "./fields/Textarea";
import Image from "./fields/Image";
import Password from "./fields/Password";
import Search from "./Search";

import formData from "../../assets/data/form.json";
import useFormState from "../../hooks/useFormState";

import "./index.css";

const Form = ({
    comparePwd = false
}) => {
    const type = "user";
    const names = ["email", "name", "avatar", "password"];
    const [similarPwd, setSimilarPwd] = useState(false);
    //const type = "product";
    //const names = ["name", "price", "discount", "pictures", "description"];
    const states = useFormState(type)();
    console.log(states);
    
    const formHandler = (e) => {
        e.preventDefault();
        const body = {};
        names.forEach(el => {
            body[el] = states[el][0]
        })
        console.log(body);
    }
    
    return (
        <form onSubmit={formHandler}>

            <button type="submit">Отправить</button>
        </form>
    )
}

export {Input, Search, Textarea, Select, Password, Image};

export default Form;