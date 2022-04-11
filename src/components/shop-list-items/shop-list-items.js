import coffeetest from "./img/coffeetest.jpg";


import './shop-list-items.css'

const ShopListItem = () => {
    let desc = [
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: "6.99"},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: "6.99"},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: "6.99"},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: "6.99"},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: "6.99"},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: "6.99"}
    ];

    const items = desc.map(({title, country, price}) => {
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
    });

    return (
        <>
            {items}
        </>
    )
}

export default ShopListItem;