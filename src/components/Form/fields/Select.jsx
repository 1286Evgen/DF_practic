const Select = ({    
    name,
    label,
    attr,
    options,
    state
    }) => {
    return (
        <div className="form__row">
            <label className="form__label" htmlFor={name}>
                {label}
                {attr?.required && <>&nbsp;<span 
                className="form__label_req">*</span></>}         
            </label>
            <div className="form__select">
                <select 
                className="form__input" 
                id="input" 
                {...attr}
                value = {state[0]}
                onChange = {(e) => state[1](e.target.value)}
                >
                    {options.map(el => <option key={el.val} value={el.val}>{el.text}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Select;