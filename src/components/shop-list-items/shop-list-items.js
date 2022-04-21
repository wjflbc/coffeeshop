import coffeetest from "./img/coffeetest.jpg";
import './shop-list-items.css'


const ShopListItem = ({data}) => {
    const items = data.map(item => {
        const {title, country, price} = item;
        return (
            <div className='list-items'>
                <img className='list-items-img' src={coffeetest} alt='picture coffee'/>
                <div className='list-items-body'>
                    <div className='list-items-title'>{title}</div>
                    <div className='list-items-country'>{country}</div>
                    <div className='list-items-text'>{price} $</div>
                </div>
            </div>
        )
    })

    return (
        <>
            {items}
        </>
    )
}

export default ShopListItem;