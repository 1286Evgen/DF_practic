import { useState } from "react";

const Search = ({}) => {
    const [text, setText] = useState("");
    const clearHandler = (e) => {
        setText("");
        }
    return (
        <div className="form__row form__row_search">
            <input 
                type="search" 
                className="form__input" 
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
            {!text &&
            <button className="form__icon">
                <i className="lni lni-search-alt"/>
            </button>}
            {text && <button 
                className="form__icon" 
                onClick = {clearHandler}>
                <i className="lni lni-close"/>
            </button>}
        </div>
    )
}

export default Search;