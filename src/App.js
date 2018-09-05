import React, { Component } from 'react';
import './App.css';
import Persons from './components/persons';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
           <div className="col-md-3">
              <div className="form-group inputWrapper">
                  <h5 className="textLabel">Please enter your data</h5>
                   <input type="text" className="form-control inputFilds" id="name" placeholder="Name"/>
                   <input type="text" className="form-control inputFilds" id="name" placeholder="Surname"/>
                   <input type="text" className="form-control inputFilds" id="name" placeholder="City"/>
                   <input type="text" className="form-control inputFilds" id="name" placeholder="Address"/>
                   <input type="text" className="form-control inputFilds" id="name" placeholder="Phone"/>
                   <Persons />
              </div>
           </div>
              
        </div>
      </div>
    );
  }
}

export default App;
