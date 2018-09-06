import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';
import { Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
  state = { };

  

changeNameHandler = (e) => {
  this.setState({ name: e.target.value})
}
changeSurnameHandler = (e) => {
  this.setState({surname: e.target.value})
}
changeCityHandler = (e) => {
  this.setState({city: e.target.value})
}
changeAddressHandler = (e) => {
  this.setState({address: e.target.value})
}
changePhoneHandler = (e) => {
  this.setState({phone: e.target.value})
  
}

postUser = () => {
  axios.post('https://phonebookapi.herokuapp.com/api/createPerson', {
  name: this.state.name,
  surname: this.state.surname,
  city: this.state.city,
  address: this.state.address,
  phone: this.state.phone
  })
  .then(response =>{
    if(response === 200) {
      this.props.saljem
    }
  })
  .catch(error =>{
console.log(error);
  });
  
}

   league = () =>{
    console.log("Ja sam parent funckija, ali me pozivas iz childa");
  }

  render() {
    
    return (
      <div className="App">
        <div className="nebo container">
          <div className="row">
            <div className="col-md-3">
              <div className="form-group inputWrapper">
                <h5 className="textLabel">Please enter your data</h5>
                <input type="text" className="form-control inputFilds"  name='name'    placeholder="Name"    onChange={this.changeNameHandler}/>
                <input type="text" className="form-control inputFilds"  name='surname' placeholder="Surname" onChange={this.changeSurnameHandler} />
                <input type="text" className="form-control inputFilds"  name='city'    placeholder="City"    onChange={this.changeCityHandler}/>
                <input type="text" className="form-control inputFilds"  name='address' placeholder="Address" onChange={this.changeAddressHandler} />
                <input type="text" className="form-control inputFilds"  name='phone'   placeholder="Phone"   onChange={this.changePhoneHandler}/>
                <input type='submit' color='warning'  onClick={this.postUser} style={{marginTop: '4%', marginLeft: '18%'}} value="add user" />
              </div>>
            </div>
            <Persons saljem={this.loadUsers} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
