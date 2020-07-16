import React,{Component} from 'react';
import { FormGroup, Form, Label, Input, Button } from 'reactstrap';

class Order extends Component{
   
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phoneNum: '',
            pickupMethod: 'Pick Up',
            address: '',
            order: true

        };

    }
    
    render(){
        

        return(
            <div>
                <p>Order here</p>
                <Form className="col-3 item-align-center">
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Your Name" value={this.state.name} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="phoneNum">Phone Number</Label>
                        <Input type="text" id="phoneNum" placeholder="Phone Number" value={this.state.phoneNum} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="address">Address</Label>
                        <Input type="text" id="address" placeholder="Plese type your address if you choose to deliver." value={this.state.address} />
                    </FormGroup>

                    <FormGroup>
                        <legend>Pick up or Delivery</legend>
                        <Label check htmlFor="pickupMethod">
                        <Input type="radio" id="pickupMethod" name="pickupMethod" value={this.state.pickupMethod} />Pick up
                        <Input type="radio" id="pickupMethod" name="pickupMethod" value={this.state.pickupMethod} />Delivery
                        </Label>
                    </FormGroup>
                    
                    <FormGroup>
                        <Button type="submit">Click here for order</Button>
                    </FormGroup>

                    
                </Form>
            </div>
        );
    }
}




export default Order;