import React,{Component} from 'react';
import { Images } from '../shared/images.js';
import { render } from '@testing-library/react';

function About(props){
    
        const images = {Images};
        return(
            <div>
            <p>About us</p>
            <image src={images.nekochef} />
            </div>
        );
    
}



export default About;