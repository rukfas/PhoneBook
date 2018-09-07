import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import SkyLight from 'react-skylight';


class Person extends Component {
    state = {
        name: '',
        surname: '',
        city: '',
        address: '',
        phone: ''
    }


    // componentDidMount() {

    // }


    deleteUser = (user) => {
        axios.delete('https://phonebookapi.herokuapp.com/api/deletePerson/' + user)
            .then(response => {
                if (response.status === 200) {
                    this.props.izbrisiOsobe();
                }
            });
    }

    editUser = (person) => {
        this.simpleDialog.show()
        this.setState({ ...this.state, personID: person._id, name: person.name, surname: person.surname, city: person.city, address: person.address, phone: person.phone })

    }

    nameHandler = (e) => {
        console.log("bilo sta");
        this.setState({ name: e.target.value })
    }
    surnameHandler = (e) => {
        this.setState({ surname: e.target.value })
    }
    cityHandler = (e) => {
        this.setState({ city: e.target.value })
    }
    addressHandler = (e) => {
        this.setState({ address: e.target.value })
    }
    phoneHandler = (e) => {
        this.setState({ phone: e.target.value })
    }

    updateUser = () => {
        axios.patch('https://phonebookapi.herokuapp.com/api/updatePerson', {
            name: this.state.name,
            surname: this.state.surname,
            city: this.state.city,
            address: this.state.address,
            phone: this.state.phone,
            personID: this.state.personID
        })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.izbrisiOsobe();
                    this.simpleDialog.hide()
                }
            })
            .catch(error => {
                console.log(error);
            });

    }


    render() {
        if (!this.props.saljem) {
            return <h1>...Loading</h1>
        } else {
            return (
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
                            {this.props.saljem.map(person => {

                                let godina = person.createdAt.slice(0, 4);
                                let mesec = person.createdAt.slice(5, 7);
                                let dan = person.createdAt.slice(8, 10);
                                let fullDate = dan + '/' + mesec + '/' + godina;


                                return (
                                    <tr key={person._id}>
                                        <td>{person.name}</td>
                                        <td>{person.surname}</td>
                                        <td>{fullDate}</td>
                                        <td>{person.city}</td>
                                        <td>{person.address}</td>
                                        <td>{person.phone}</td>
                                        <td>
                                            <Button color='primary' onClick={this.editUser.bind(this, person)}
                                                style={{ marginRight: '4%' }} >Edit</Button>
                                            <Button color='danger' onClick={this.deleteUser.bind(this, person._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                    <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} >

                        <div className="form-group inputWrapper">
                            <h5 className="textLabel">Please enter your data</h5>
                            <input type="text" className="form-control inputFilds" value={this.state.name} onChange={this.nameHandler} name='name' placeholder="Name" />
                            <input type="text" className="form-control inputFilds" value={this.state.surname} onChange={this.surnameHandler} name='surname' placeholder="Surname" />
                            <input type="text" className="form-control inputFilds" value={this.state.city} name='city' onChange={this.cityHandler} placeholder="City" />
                            <input type="text" className="form-control inputFilds" value={this.state.address} name='address' onChange={this.addressHandler} placeholder="Address" />
                            <input type="text" className="form-control inputFilds" value={this.state.phone} name='phone' onChange={this.phoneHandler} placeholder="Phone" />
                            <input type='submit' color='warning' onClick={this.updateUser} style={{ marginTop: '4%', marginLeft: '18%' }} value="add user" />
                        </div>

                    </SkyLight>
                </div>
            )
        }
    }
}


export default Person;