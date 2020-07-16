import React,{Component} from 'react';
import { FormGroup, Form, Label, Input, Button, FormFeedback } from 'reactstrap';


class Order extends Component{
   
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phoneNum: '',
            pickupMethod: 'Pick Up',
            address: '',
            order: true,
            touched: {
                name: false,
                phoneNum: false,

            }

        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(name, phoneNum) {
        const errors = {
            name: '',
            phoneNum: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'First name must be at least 2 characters.';
            } else if (name.length > 15) {
                errors.name = 'First name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }
    
    render(){
        const errors = this.validate(this.state.name, this.state.phoneNum);
        

        return(
            <div>
                <div className="container">
                <p>Order here</p>
                <Form onSubmit={this.handleSubmit} className="col-3 item-align-center">
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" 
                        placeholder="Your Name" 
                        value={this.state.name} 
                        invalid={errors.name}
                        onBlur={this.handleBlur("name")}
                        onChange={this.handleInputChange}  />
                        <FormFeedback>{errors.name}</FormFeedback>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="phoneNum">Phone Number</Label>
                        <Input type="text" id="phoneNum" 
                        placeholder="Phone Number" 
                        value={this.state.phoneNum}
                        invalid={errors.phoneNum}
                        onBlur={this.handleBlur("phoneNum")}
                        onChange={this.handleInputChange} />
                         <FormFeedback>{errors.phoneNum}</FormFeedback>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="address">Address</Label>
                        <Input type="text" id="address" placeholder="For delivery only" value={this.state.address} />
                    </FormGroup>

                    <FormGroup>
                        <legend>Pick up or Delivery</legend>
                        <Label check htmlFor="pickupMethod">
                        <Input type="radio" id="pickupMethod" name="pickupMethod" value={this.state.pickupMethod} />Pick up
                        <Input type="radio" id="pickupMethod" name="pickupMethod" value={this.state.pickupMethod} />Delivery
                        </Label>
                    </FormGroup>
                    
                    <FormGroup>
                        <Button type="submit">Click here to order</Button>
                    </FormGroup>

                    
                </Form>
                </div>
            </div>
        );
    }
}




export default Order;