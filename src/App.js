import React,{Component} from 'react';
import './App.css';

import LoanInput from './components/LoanInput';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component{
  render(){
    return(
      <div className="container p-0">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-12 col-sm-12">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-3 col-sm-3 col-lg-3">
            <Sidebar/>
          </div>
          <div className="col-md-9 col-sm-9 col-9 col-lg-9">
            <LoanInput/>                    
          </div>
        </div>
      </div>
    )
  }
}

export default App;
