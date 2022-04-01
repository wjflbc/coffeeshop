
import {Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';

import './app-header-item.css';

const AppHeaderItem = () => {
    return (
        <>
                <Nav.Item as="li">
                    <Link to='/' className='nav-links'>Coffee house</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to='/coffee'  className='nav-links'>Our coffee</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to='/' className='nav-links'>For your pleasure</Link>
                </Nav.Item>
        </>
    )
}

export default AppHeaderItem;