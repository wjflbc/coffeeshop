import {Container, Row, Col} from "react-bootstrap";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";

import './app-filter.css'


const AppFilter = ({onUpdateSearch, filter, onFilterChange}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='app-filter-items'>
                        <SearchPanel onUpdateSearch={onUpdateSearch}/>
                        <Filter
                            filter={filter}
                            onFilterChange={onFilterChange}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AppFilter;