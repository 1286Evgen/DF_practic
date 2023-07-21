const Textarea = ({}) => {
    return (
        <div className="form__row">
            <label className="form__label" htmlFor="input">
                хай&nbsp;
                <span className="form__label_req">*</span>            
            </label>
            <textarea rows={4} className="form__input form__textarea" id="input" required/>
        </div>
    )
}

export default Textarea;