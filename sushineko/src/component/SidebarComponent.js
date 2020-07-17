import React,{Component} from 'react';
import {Container, Row, Col} from 'reactstrap';


function Sidebar(){

    return(
        <div id="wrapper">
            <div class="left-column">
                <Container className="sidebar">
                    <Row>
                        <Col>
                            <p>test</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default Sidebar;