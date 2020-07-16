import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardHeader, Row, Col, Container, CardImgOverlay, CardTitle, Button } from "reactstrap";

import { NIGIRIMENU } from "../shared/Nigiri";
import { ROLLSMENU } from "../shared/Rolls";
import { SIDEMENU } from "../shared/Sidemenu";
import { SPECIALSMENU } from "../shared/Specials";

function Nigiri({ nigiriMenu }) {
	return (
		<div>
			{nigiriMenu.map((nigiri) => {
				return (
                <Container>
				<Row>
					<Col sm="3" mx="auto">
					<Card>
						<CardImgOverlay>
						<CardTitle className="CardTitle fluid">{nigiri.name}</CardTitle>
						</CardImgOverlay>
						<CardImg top src={nigiri.image} alt={nigiri.name} width="50"/>
						<CardBody>
							<CardText>
								{nigiri.description} <br />
								Price:${nigiri.price}<br />
								<Button type="submit">Order</Button>
							</CardText>
						</CardBody>
					</Card>
					</Col>
                </Row>
				</Container>
				);
			})}
		</div>
	);
}

function Rolls({ rollsMenu }) {
	return (
		<div>
			{rollsMenu.map((roll) => {
				return (
				<Container>
					<Row>
					<Col sm="3" mx="3">
					<Card>
					<CardImgOverlay>
					<CardTitle className="CardTitle fluid">{roll.name}</CardTitle>
					</CardImgOverlay>
						<CardImg top src={roll.image} alt={roll.name} width="50" />
						<CardBody>
							<CardText>
								{roll.description} <br />
								Price:${roll.price}
							</CardText>
						</CardBody>
					</Card>
					</Col>
					</Row>
				</Container>
				);
			})}
		</div>
	);
}

function Specials({ specialsMenu }) {
	return (
		<div>
			{specialsMenu.map((specials) => {
				return (
                <Container>
				<Row>
					<Col sm="3" mx="auto">
					<Card>
						<CardImgOverlay>
						<CardTitle className="CardTitle fluid">{specials.name}</CardTitle>
						</CardImgOverlay>
						<CardImg top src={specials.image} alt={specials.name} width="50"/>
						<CardBody>
							<CardText>
								{specials.description} <br />
								Price:${specials.price}<br />
								<Button type="submit">Order</Button>
							</CardText>
						</CardBody>
					</Card>
					</Col>
                </Row>
				</Container>
				);
			})}
		</div>
	);
}

function Sidemenu({ sideMenu }) {
	return (
		<div>
			{sideMenu.map((sidemenu) => {
				return (
                <Container>
				<Row>
					<Col sm="3" mx="auto">
					<Card>
						<CardImgOverlay>
						<CardTitle className="CardTitle fluid">{sidemenu.name}</CardTitle>
						</CardImgOverlay>
						<CardImg top src={sidemenu.image} alt={sidemenu.name} width="50"/>
						<CardBody>
							<CardText>
								{sidemenu.description} <br />
								Price:${sidemenu.price}<br />
								<Button type="submit">Order</Button>
							</CardText>
						</CardBody>
					</Card>
					</Col>
                </Row>
				</Container>
				);
			})}
		</div>
	);
}



class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nigiriMenu: NIGIRIMENU,
			rollsMenu: ROLLSMENU,
			sideMenu: SIDEMENU,
			specialsMenu: SPECIALSMENU,
		};
	}

	render() {
		return (
			<React.Fragment>
				<Nigiri nigiriMenu={this.state.nigiriMenu} />
				<Rolls rollsMenu={this.state.rollsMenu} />
				<Specials specialsMenu={this.state.specialsMenu} />
				<Sidemenu sideMenu={this.state.sideMenu} />
			</React.Fragment>
		);
	}
}

export default Menu;
