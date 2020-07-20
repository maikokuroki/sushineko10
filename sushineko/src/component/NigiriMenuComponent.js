import React, { Component } from "react";
import {
	CardDeck,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
	Label,
	Form,
} from "reactstrap";

import { NIGIRIMENU } from "../shared/Nigiri";

class Nigiri extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nigiriMenu: NIGIRIMENU,
			quantity: 0,

			order: [],
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const quantity = target.value;
		const itemName = target.name;

		this.setState({
			order: [...this.state.order, { quantity, itemName }],
		});
	}

	handleSubmit(event) {
		console.log("Order: " + JSON.stringify(this.state.order));
		alert("Order: " + JSON.stringify(this.state.order));
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				<h1>= Nigiri =</h1>
				<CardDeck>
					{this.state.nigiriMenu.map((nigiri) => {
						return (
							<Card>
								<CardImg
									top
									src={nigiri.image}
									alt={nigiri.name}
									width='50'
									height='150'
								/>
								<CardTitle className='CardTitle fluid'>{nigiri.name}</CardTitle>
								<CardBody>
									<CardText>
										<Form onSubmit={this.handleSubmit}>
											{nigiri.description} <br />
											Price:${nigiri.price}
											<hr />
											<Label htmlFor={nigiri.name}>Quantity</Label>
											<select
												class='form-control'
												id={nigiri.name}
												name={nigiri.name}
												value={this.state.quantity}
												onChange={this.handleInputChange}>
												<option value='0' selected>
													0
												</option>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
												<option value='5'>5</option>
											</select>
											<br />
											<Button type='submit'>Add to the Cart</Button>
										</Form>
									</CardText>
								</CardBody>
							</Card>
						);
					})}
				</CardDeck>
			</React.Fragment>
		);
	}
}

export default Nigiri;
