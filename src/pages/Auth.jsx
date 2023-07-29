import {useState} from "react";

import Form from "../components/Form";
import Layout from "../components/Layout";

export function Auth () {
    const [index, setIndex] = useState(1);
    const types = ["login", "signup", "getToken", "upPwd"];
    const names = ["Войти", "Зарегистрироваться", "Восстановить пароль", "Восстановить пароль"];
    return (
        <Layout>
            <div className="form__wrapper">
                <h1>{names[index]}</h1>
                <Form type="auth" fieldsType={types[index]}/>
                <div className="form__links">
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>
        </Layout>
    )
}