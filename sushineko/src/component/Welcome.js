function OrderConfirm(){
    return(
        <div>
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
    
    );
}