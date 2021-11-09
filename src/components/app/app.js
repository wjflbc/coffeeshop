
import AppHeader from "../app-header/app-header";
import AppInfo from "../app-info/app-info";
import CartsList from "../carts-list/carts-list";
import Footer from "../footer/footer";
import AppFilter from "../app-filter/app-filter";
import ShopList from "../shop-list/shop-list";
import Item from "../item/item";

import {Component} from "react";

import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Aromatic Coffee 1 kg', country:'Brazil', price: 10.5, id:1},
                {name:'Tasty Coffee 1 kg', country:'Kenya', price: 8.5, id:2},
                {name:'Aromatic Coffee 1 kg', country:'Brazil', price: 15.7, id:3},
                {name:'Tasty Coffee 1 kg', country:'Kenya', price: 11.3, id:4},
                {name:'Aromatic Coffee 1 kg', country:'Brazil', price: 7.5, id:5},
                {name:'Tasty Coffee 1 kg', country:'Columbia', price: 4.8, id:6}
            ],
            term: '',
            filter: ''
        }
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterItem = (items, filter) => {
        switch (filter) {
            case 'All':
                return  items;
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            default:
               return  items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

   render() {
        const {data, term, filter}= this.state;
        const visibleData =this.filterItem(this.searchItem(data, term), filter) ;
       return(
           <div className='app'>
               <AppHeader/>
               <AppInfo/>
               <CartsList/>
               <Footer/>
               <AppFilter
                   onUpdateSearch={this.onUpdateSearch}
                   filter={filter}
                   onFilterChange={this.onFilterChange}/>
               <ShopList data={visibleData}/>
               <Item/>
           </div>
       )
   }
}

export default App;