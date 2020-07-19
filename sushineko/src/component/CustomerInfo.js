import React,{Component} from 'react';
import { FormGroup, Form, Label, Input, Button, FormFeedback, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Menu from './MenuComponent';

class CustomerInfo extends Component{
   
    constructor(props) {
        super(props);

        this.state = {
            menu: { Menu },
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
        this.toggleModal = this.toggleModal.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    handleSubmit(event) {
        

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
                <div className="container" id="orderform">
                    <div className="row">
                        <div className="col">
                            <h2>Your Info</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Form onSubmit={this.handleSubmit} className="col-3 item-align-center">
                            <div className="col">
                                <FormGroup>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name"
                                    name="name" 
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
                                    name="phoneNum" 
                                    placeholder="Phone Number" 
                                    value={this.state.phoneNum}
                                    invalid={errors.phoneNum}
                                    onBlur={this.handleBlur("phoneNum")}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Input type="text" id="address" 
                                    name="address"
                                    placeholder="For delivery only" 
                                    value={this.state.address} />
                                </FormGroup>

                                <FormGroup>
                                    <legend>Pick up or Delivery</legend>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <Label className="btn btn-success"  htmlFor="pickupMethod">
                                    <Input type="radio" id="pickupMethod" name="pickupMethod" value={this.state.pickupMethod} />Pick up
                                    </Label>
                                    <Label className="btn btn-primary" htmlFor="pickupMethod">
                                    <Input type="radio" id="pickupMethod" name="pickupMethod" value={this.state.pickupMethod} />Delivery
                                    </Label>
                                    </div>
                                </FormGroup>

                                <FormGroup>
                                    <Button type="submit">Order</Button>                                    
                                </FormGroup>
                            </div>
                          
                            
                        </Form>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Your Order
                    <ModalBody>
                        <h2>Please verify your Info.</h2>
                        <p>
                            Name: {this.state.name}<br/>
                            Phone #: {this.state.phoneNum}<br />
                            Pick-up or Delivery: {this.state.pickupMethod} <br />
                            Address: {this.state.address}
                        </p>
                        <Button type="submit">Order</Button>
                    </ModalBody>
                </ModalHeader>
            </Modal>
                    </div>
                </div>
            </div>
        );
    }
}






export default CustomerInfo;