import coffeetest from "./img/coffeetest.jpg";


import './shop-list-items.css'

const ShopListItem = ({name, country, price}) => {

    return (
        <>
            <div className='list-items' >
                <img className='list-items-img' src={coffeetest} alt='picture coffee'/>
                <div className='list-items-body'>
                    <div className='list-items-title'>{name}</div>
                    <div className='list-items-country'>{country}</div>
                    <div className='list-items-text'>{price + '$'}</div>
                </div>
            </div>
        </>
    )
}

export default ShopListItem;