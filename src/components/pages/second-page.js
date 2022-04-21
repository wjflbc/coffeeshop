
import AppFilter from "../app-filter/app-filter";
import ShopList from "../shop-list/shop-list";
import Item from "../item/item";
import {useState} from "react";



const SecondPage = () => {

    const [filter, setFilter] = useState('');
    const [term, setTerm] = useState('');

    let desc = [
        {title: 'Pasdf Coffee 1 kg', country: 'Brazil', price: "6.99"},
        {title: 'Aghyr Coffee 1 kg', country: 'Kenya', price: "6.99"},
        {title: 'Olfak Coffee 1 kg', country: 'Columbia', price: "6.99"},
        {title: 'Aaloy Coffee 1 kg', country: 'Brazil', price: "6.99"},
        {title: 'Depu Coffee 1 kg', country: 'Columbia', price: "6.99"},
        {title: 'Rouy Coffee 1 kg', country: 'Brazil', price: "6.99"}
    ];

    function onFilterChange(name) {
        setFilter(name);
    }

    function searchItem(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.indexOf(term) > -1;
        })
    }

    function updateSearch(term) {
        setTerm(term);
    }

   function filterItems(items, filter) {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => (item.country === 'Brazil'));
            case 'Columbia':
                return items.filter(item => (item.country === 'Columbia'));
            case 'Kenya':
                return items.filter(item => (item.country === 'Kenya'));
            default:
                return items
        }
   }

    const visibleData = filterItems(searchItem(desc, term), filter);
    return (
        <>
            <AppFilter
                onFilterChange={onFilterChange}
                filter={filter}
                updateSearch={updateSearch}/>
            <ShopList
                data={visibleData}/>
            {/*<Item/>*/}
        </>
    )
}

export default SecondPage;