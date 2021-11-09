import {Component} from "react";

import './filter.css'

class Filter extends Component{

    buttons = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
        {name: 'All', label: 'All'}
    ]



    render() {
        const {filter, onFilterChange}= this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? 'btn-secondary' : '';
            return (
                <button
                    className={`btn ${clazz} `}
                    type='button'
                    key={name}
                    onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        })
        return (
            <>
                <div className='btn-group'>
                    <div className='filter-title'>Or filter</div>
                    {buttons}
                </div>
            </>
        )
    }
}

export default Filter;