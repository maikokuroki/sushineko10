import React, { Component } from "react";
import {
	CardDeck,
	Card,
	CardImg,
	CardText,
	CardBody,
	Container,
	CardTitle,
	Button,
	Label,
	Table
} from "reactstrap";

import { NIGIRIMENU } from "../shared/Nigiri";
import { ROLLSMENU } from "../shared/Rolls";
import { SIDEMENU } from "../shared/Sidemenu";
import { SPECIALSMENU } from "../shared/Specials";
import { render } from "@testing-library/react";
import CustomerInfo from './CustomerInfo';

function Nigiri({ nigiriMenu }) {
	return (
		<React.Fragment>
			<h1>= Nigiri =</h1>
		<CardDeck>
			{nigiriMenu.map((nigiri) => {
				return (
					<Card>
						<CardImg top src={nigiri.image} alt={nigiri.name} width='50' height='150' />
						<CardTitle className='CardTitle fluid'>{nigiri.name}</CardTitle>
						<CardBody>
							<CardText>
								{nigiri.description} <br />
								Price:${nigiri.price}
								<hr />
								<Label htmlFor={nigiri.name}>Quantity</Label>
                    				<select class="form-control" id={nigiri.name}>
                      					<option value="0" selected>0</option>
                      					<option value="1">1</option>
                      					<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								<br />
								<Button type='submit'>Add to the Cart</Button>
							</CardText>
						</CardBody>
					</Card>
				);
			})}
		</CardDeck>
		</React.Fragment>
	);
}

function Rolls({ rollsMenu }) {
	return (
		<React.Fragment>
			<h1>= Rolls =</h1>
		<CardDeck>
			{rollsMenu.map((roll) => {
				return (
					<Card>
						<CardImg top src={roll.image} alt={roll.name} width='50' height='150' />
						<CardTitle className='CardTitle fluid'>{roll.name}</CardTitle>
						<CardBody>
							<CardText>
								{roll.description} <br />
								Price:${roll.price}
								<hr />
								<Label htmlFor={roll.name}>Quantity</Label>
                    				<select class="form-control" id={roll.name}>
                      					<option value="0" selected>0</option>
                      					<option value="1">1</option>
                      					<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								<br />
								<Button type='submit'>Add to the Cart</Button>
							</CardText>
						</CardBody>
					</Card>
				);
			})}
		</CardDeck>
		</React.Fragment>
	);
}

function Specials({ specialsMenu }) {
	return (
		<React.Fragment>
			<h1>= Specials =</h1>
		<CardDeck>
			{specialsMenu.map((specials) => {
				return (
					<Card>
						<CardImg top src={specials.image} alt={specials.name} width='50' height='300' />
						<CardTitle className='CardTitle fluid'>{specials.name}</CardTitle>
						<CardBody>
							<CardText>
								{specials.description} <br />
								Price:${specials.price}
								<hr />
								<Label htmlFor={specials.name}>Quantity</Label>
                    				<select class="form-control" id={specials.name}>
                      					<option value="0" selected>0</option>
                      					<option value="1">1</option>
                      					<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								<br />
								<Button type='submit'>Add to the Cart</Button>
							</CardText>
						</CardBody>
					</Card>
				);
			})}
		</CardDeck>
		</React.Fragment>
	);
}

function Sidemenu({ sideMenu }) {
	return (
		<React.Fragment>
			<h1>= Side Menu =</h1>
		<CardDeck>
			{sideMenu.map((sidemenu) => {
				return (
					<Card>
						<CardImg top src={sidemenu.image} alt={sidemenu.name} width='50' height='150' />
						<CardTitle className='CardTitle'>{sidemenu.name}</CardTitle>
						<CardBody>
							<CardText>
								{sidemenu.description} <br />
								Price:${sidemenu.price}<br />
								<hr />
								<Label htmlFor={sidemenu.name}>Quantity</Label>
                    				<select class="form-control" id={sidemenu.name}>
                      					<option value="0" selected>0</option>
                      					<option value="1">1</option>
                      					<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								
								<br />
								<Button type='submit'>Add to the Cart</Button>
							</CardText>
						</CardBody>
					</Card>
				);
			})}
		</CardDeck>
		</React.Fragment>
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
				<Container>
					<Nigiri nigiriMenu={this.state.nigiriMenu} />
					<Rolls rollsMenu={this.state.rollsMenu} />
					<Specials specialsMenu={this.state.specialsMenu} />
					<Sidemenu sideMenu={this.state.sideMenu} />

					<h2>Order Details</h2>
					
					<Table>
						<thead>
							<tr>
								<th>Item</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td id="item"></td>
								<td id="quantity"></td>
								<td id="price"></td>
								<td id="total"></td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td>
									<h5>Subtotal</h5>
								</td>
								<td id="orderSubtotal"></td>
							</tr>
						</tfoot>
					</Table>
					<CustomerInfo />
				</Container>
			</React.Fragment>
		);
	}
}

export default Menu;
