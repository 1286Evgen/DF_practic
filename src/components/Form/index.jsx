import { useState } from "react";

import Input from "./fields/Input";
import Select from "./fields/Select";
import Textarea from "./fields/Textarea";
import Image from "./fields/Image";
import Password from "./fields/Password";
import Search from "./Search";

import AuthForm from "./forms/AuthForm";
import ProductForm from "./forms/AuthForm";
import ReviewForm from "./forms/AuthForm";

import "./index.css";

const Form = ({
    type,
    fieldsType,
    cb = () => {}
}) => {
    const authFields = ["email", "password"];
    const regFields = ["email", "name", "avatar", "about", "password"];
    const pwdFields = ["email", "token", "password"];
 
    return (
        <>
            {type === "auth" && 
            <>
                {fieldsType === "login" && <AuthForm
                    fields={authFields}
                    btnText="Войти"
                    cb={cb}
                />}
                {fieldsType === "signup" && <AuthForm
                    fields={regFields}
                    comparePwd = {true}
                    btnText="Зарегистрироваться"
                    cb={cb}
                />}
                {fieldsType === "getToken" && <AuthForm
                    fields={pwdFields.slice(0,1)}
                    btnText="Получить токен"
                    cb={cb}
                />}
                {fieldsType === "updPwd" && <AuthForm
                    fields={authFields.slice(1)}
                    comparePwd = {true}
                    btnText="Обновить пароль"
                    cb={cb}
                />}
            </>}
        </>
    )
}

export {Input, 
    Search, 
    Textarea, 
    Select, 
    Password, 
    Image,
    AuthForm,
    ProductForm,
    ReviewForm
};

export default Form;