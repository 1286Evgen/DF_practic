import { Default } from "../../../assets/images";

const Image = ({
    name,
    label,
    attr,
    state,
    position
    }) => {
        const imgStyle = {
            backgroundImage: `url(${state[0] || Default})`
        }
    return (
        <div className="form__row">
            <div className="form__image" style={imgStyle}/>
            <label className="form__label" htmlFor={name}>
                {label}
                {attr?.required && <>&nbsp;<span 
                className="form__label_req">*</span></>}         
            </label>
            <input 
                className="form__input" 
                id={name} 
                {...attr}
                value = {state[0]}
                onChange = {(e) => state[1](e.target.value)}
            />
        </div>
    )
}

export default Image;