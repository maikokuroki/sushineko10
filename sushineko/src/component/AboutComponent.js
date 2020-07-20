import React,{Component} from 'react';
import { Images } from '../shared/images.js';
import { render } from '@testing-library/react';
import {Container, Row, Col, Media} from 'reactstrap';

function About(props){
    
        const images = {Images};
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2>About us</h2>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Media>
                            <Media left>
                                <Media object src={`${process.env.PUBLIC_URL}/assets/images/neko.png`} alt="Master Neko Chef" width="500" />
                            </Media>
                            <Media body>
                                <Media heading>
                                Meet the Master Chef Neko
                                </Media>
                               He was born and raised in Meow Galaxy. When he was 18, he moved to Japan to learn art of Sushi. After 10 years of practice, he finally returned to his hometown and opened his own sushi restaurant.<br />
                               Please enjoy 3 Meowchelin starred dining experience.
                            </Media>
                            </Media>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    
}



export default About;