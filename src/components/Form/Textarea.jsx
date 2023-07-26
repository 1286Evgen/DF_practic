const Textarea = ({    
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
            <textarea rows={4} className="form__input form__textarea" id={name} {...attr}/>
        </div>
    )
}

export default Textarea;