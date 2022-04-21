import {useState} from "react";
import './search-panel.css'

const SearchPanel = ({updateSearch}) => {

    const [term, setTerm] = useState('');


    function onUpdateSearch(e) {
        const term = e.target.value;
        setTerm(term)
        updateSearch(term);

    }

    return (
        <div className='search'>
            <div className='search-title'>Lookiing for</div>
            <input
                type='text'
                className='form search-input'
                placeholder='start typing here...'
                value={term}
                onChange={onUpdateSearch}
            />
        </div>
    )

}

export default SearchPanel;