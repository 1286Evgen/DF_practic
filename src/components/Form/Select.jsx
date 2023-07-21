const Select = ({values}) => {
    return (
        <div className="form__row">
            <label className="form__label" htmlFor="input">
                хай&nbsp;
                <span className="form__label_req">*</span>            
            </label>
            <div className="form__select">
                <select className="form__input" id="input">
                    {values.map(el => <option key={el}>{el}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Select;