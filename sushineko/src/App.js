import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './component/MainComponent';
import './App.css';
import Test from './component/test';



class App extends Component {
  render(){
  
    return (
      <BrowserRouter>
        
        <Main />
        
        
      </BrowserRouter>
    );
  }
}

export default App;