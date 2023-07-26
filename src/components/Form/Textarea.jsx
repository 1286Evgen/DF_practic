const Textarea = ({    
    name,
    label,
    attr,
    state
    }) => {
    return (
        <div className="form__row">
            <label className="form__label" htmlFor={name}>
                {label}
                {attr?.required && <>&nbsp;<span 
                className="form__label_req">*</span></>}         
            </label>
            <textarea 
            rows={4} 
            className="form__input form__textarea" 
            id={name} 
            {...attr}
            value = {state[0]}
            onChange = {(e) => state[1](e.target.value)}
            />
        </div>
    )
}

export default Textarea;