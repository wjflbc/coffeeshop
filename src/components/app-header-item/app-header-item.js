
import {Nav, Image} from "react-bootstrap";
import coffeebeanstwo from './img/coffeebeanstwo.png';

import './app-header-item.css';

const AppHeaderItem = () => {
    return (
        <>
            <Nav.Item as="li">
                <Image className='header-item-img' src={coffeebeanstwo} alt='logo coffee beans'/>
            </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/home" className='text-white'>Coffee house</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" className='text-white'>Our coffee</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" className='text-white'>For your pleasure</Nav.Link>
                </Nav.Item>
        </>
    )
}

export default AppHeaderItem;