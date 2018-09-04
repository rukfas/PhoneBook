import React, { Component } from 'react';
import './App.css';

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
              </div>
           </div>
              <div className="col-md-9 tablePost">
                  <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Surname</th>
                          <th scope="col">Created Data</th>
                          <th scope="col">City</th>
                          <th scope="col">Address</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Otto</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
        </div>
      </div>
    );
  }
}

export default App;
