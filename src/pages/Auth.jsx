import { useState } from "react";

import Form from "../components/Form";
import Layout from "../components/Layout";

export function Auth () {
    const [index, setIndex] = useState(0);
    const types = ["login", "signup", "getToken", "upPwd"];
    const names = ["Войти", "Зарегистрироваться", "Восстановить пароль", "Восстановить пароль"];
    const authHandler = () => {};
    const regHandler = () => {};
    const tokenHandler = () => {
        setIndex(3)
    };
    const pwdHandler = () => {};

    const handlers = [authHandler, regHandler, tokenHandler, pwdHandler];
    
    return (
        <Layout>
            <div className="form__wrapper">
                <h1>{names[index]}</h1>
                <Form 
                type="auth" 
                fieldsType={types[index]}
                cb={handlers[index]}/>
                <div className="form__links">
                    {index !== 0 && <button
                        ckassName="form__links"
                        onClick={() => setIndex(0)}
                    >Войти</button>}
                    {index !== 1 && <button
                        ckassName="form__links"
                        onClick={() => setIndex(1)}
                    >Зарегистрироваться</button>}
                    {index !== 2 && index !== 3 && <button
                        ckassName="form__links"
                        onClick={() => setIndex(2)}
                    >Восстановить пароль</button>}
                </div>
            </div>
        </Layout>
    )
}