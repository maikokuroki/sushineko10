import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';



const NIGIRI = [
    {
        id: 0,
        name: "MAGURO",
        image: "/assets/images/maguro.jpeg",
        featured: false,
        description: "Tuna",
        price:5
    },
    {
        id: 1,
        name: "TORO SALMON",
        image: "/assets/images/torosalmon.jpg",
        featured: false,
        description: "Fatty salmon sushi",
        price:5
    },
    {
        id: 2,
        name: "TAMAGO",
        image: "/assets/images/tamago.jpeg",
        featured: false,
        description: "Cooked egg sushi.",
        price:3
    },
    {
        id: 3,
        name: "IKURA",
        image: "/assets/images/ikura.jpeg",
        featured: false,
        description: "Salmon roe.",
        price:8
    },
    {
        id: 4,
        name: "AJI",
        image: "/assets/images/aji.jpg",
        featured: false,
        description: "Spanish mackarel",
        price:5
    },
]

class NigiriMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
          nigiri: NIGIRI
        }
    }
    render(){

   
        if(this.nigiri) {
            return(
                <div>
                    {this.nigiri.map(nigiri => {
                        return(
                
                            <Card>
                                <CardImg top src={nigiri.image} alt={nigiri.name} />
                                <CardBody>
                                    <CardText>
                                        {nigiri.description} <br />
                                        Price:${nigiri.price}
                                    </CardText>
                                </CardBody>
                            </Card>
                        );
                        })}
                </div>
                
            );
        }
    

    return (
        <div /> 
        );
    }
}

export default NigiriMenu;