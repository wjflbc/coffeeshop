

import './filter.css'

const Filter = (props) => {

   let buttons = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
        {name: 'All', label: 'All'}
    ]


    const {filter, onFilterChange}= props;
    const button = buttons.map(({name, label}) => {
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
            <div className='btn-groups'>
                <div className='filter-title'>Filter</div>
                {button}
            </div>
        </>
    )
}

export default Filter;