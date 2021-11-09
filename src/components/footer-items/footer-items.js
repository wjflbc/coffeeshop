import {Image, Nav} from "react-bootstrap";
import coffeebeans from "./img/beansdark.png";


const FooterItems = () => {
    return (
        <>
            <Nav.Item as="li">
                <Image className='header-item-img' src={coffeebeans} alt='logo coffee beans'/>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home" className='text-dark'>Coffee house</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1" className='text-dark'>Our coffee</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className='text-dark'>For your pleasure</Nav.Link>
            </Nav.Item>
        </>
    )
}

export default FooterItems;