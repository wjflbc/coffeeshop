import {Component} from "react";
import './search-panel.css'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term);

    }


    render() {
        return (
            <div>
                <div className='search-title'>Lookiing for</div>
                <input
                    type='text'
                    className='form search-input'
                    placeholder='start typing here...'
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPanel;