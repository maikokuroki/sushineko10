import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

import { NIGIRIMENU } from "../shared/Nigiri";
import { ROLLSMENU } from "../shared/Rolls";
import { SIDEMENU } from "../shared/Sidemenu";
import { SPECIALSMENU } from "../shared/Specials";

function Nigiri({ nigiriMenu }) {
	return (
		<div>
			{nigiriMenu.map((nigiri) => {
				return (
                <div className="col-3">
					<Card>
						<CardImg top src={nigiri.image} alt={nigiri.name} width="50"/>
						<CardBody>
							<CardText>
								{nigiri.description} <br />
								Price:${nigiri.price}
							</CardText>
						</CardBody>
					</Card>
                </div>
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
					<Card>
						<CardImg top src={roll.image} alt={roll.name} />
						<CardBody>
							<CardText>
								{roll.description} <br />
								Price:${roll.price}
							</CardText>
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
}

// CREATE FUNCTION COMPONENT FOR SIDEMENU

// CREATE FUNCTION COMPONENT FOR SPECIAL MENU

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
			</React.Fragment>
		);
	}
}

export default Menu;
