import {Col, Container,Row} from "react-bootstrap";
import coffee from './img/coffee.jpg';
import firstclas from './img/firstclass.jpg';
import packages from './img/packages.jpg';

import './carts-list-item.css'

const CartsListItem = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                       <div className='cards-wrapper'>
                           <div className='cards' >
                               <img className='cards-img' src={coffee} />
                               <div className='cards-body'>
                                   <div className='cards-title'>Solimo Coffee Beans 2 kg</div>
                                   <div className='cards-text'>10.73$</div>
                               </div>
                           </div>
                           <div className='cards' >
                               <img className='cards-img' src={firstclas} />
                               <div className='cards-body'>
                                   <div className='cards-title'>Presto Coffee Beans 1 kg</div>
                                   <div className='cards-text'>15.93$</div>
                               </div>
                           </div>
                           <div className='cards' >
                               <img className='cards-img' src={packages} />
                               <div className='cards-body'>
                                   <div className='cards-title'>AROMISTICO Coffee 1 kg</div>
                                   <div className='cards-text'>6.60$</div>
                               </div>
                           </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartsListItem;