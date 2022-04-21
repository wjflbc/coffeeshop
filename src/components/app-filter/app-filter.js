import {Container, Row, Col} from "react-bootstrap";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";

import './app-filter.css'
import {useState} from "react";



const AppFilter = ({onFilterChange, filter, updateSearch}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className='app-filter-items'>
                        <SearchPanel
                            updateSearch={updateSearch}/>
                        <Filter
                            onFilterChange={onFilterChange}
                            filter={filter}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AppFilter;