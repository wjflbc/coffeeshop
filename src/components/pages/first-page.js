import AppHeader from "../app-header/app-header";
import AppInfo from "../app-info/app-info";
import CartsList from "../carts-list/carts-list";
import Footer from "../footer/footer";



const FirstPage = () => {
    return (
        <>
            <AppHeader/>
            <AppInfo/>
            <CartsList/>
            <Footer/>
        </>
    )
}

export default FirstPage;