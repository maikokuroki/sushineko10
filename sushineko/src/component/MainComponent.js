import React,{Component} from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Order from './OrderComponent';
import About from './AboutComponent';

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Switch>
                  <Route path="/menu" component={Menu} />
                  <Route path="/order" component={Order} />
                  <Route path="/about" component={About} />
            
                </Switch>
                  
                <Footer />
            
            </React.Fragment>

        );
    }
}

export default Main;