const Input = ({}) => {
    return (
        <div className="form__row">
            <label className="form__label" htmlFor="input">
                хай&nbsp;
                <span className="form__label_req">*</span>            
            </label>
            <input className="form__input" id="input" required/>
        </div>
    )
}

export default Input;