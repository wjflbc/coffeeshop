import {Image, Nav} from "react-bootstrap";
import coffeebeans from "./img/beansdark.png";
import './footer-items.css';

const FooterItems = () => {
    return (
        <>
            <Nav.Item as="li">
                <Image className='header-item-img' src={coffeebeans} alt='logo coffee beans'/>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/home" className='text-dark link'>Coffee house</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1" className='text-dark link'>Our coffee</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className='text-dark link'>For your pleasure</Nav.Link>
            </Nav.Item>
        </>
    )
}

export default FooterItems;