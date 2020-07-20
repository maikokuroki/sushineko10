import React,{Component} from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Home from './HomeComponent';



class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
               
                <Switch>
                  <Route path='/home' component={Home} />
                  <Route path="/menu" component={Menu} />
                  
                  <Route path="/about" component={About} />
            
                </Switch>
                
                
                
                 
                <Footer />
            
            </React.Fragment>

        );
    }
}

export default Main;