const Input = ({
    name,
    label,
    attr
    }) => {
    return (
        <div className="form__row">
            <label className="form__label" htmlFor={name}>
                {label}
                {attr?.required && <>&nbsp;<span 
                className="form__label_req">*</span></>}         
            </label>
            <input className="form__input" id={name} {...attr}/>
        </div>
    )
}

export default Input;