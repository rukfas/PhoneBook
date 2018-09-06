import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';


class Person extends Component {
    state = {
        name: '',
        surname: '',
        city: '',
        address: '',
        phone: '',
    }


    componentDidMount() {
     this.loadUsers();
    }

    loadUsers = () => {
        axios.get('https://phonebookapi.herokuapp.com/api/allPersons')
        .then(response => {
            this.setState({ ...this.state, persons: response.data.persons });
        });
    }

    deleteUser = (user) => {
        axios.delete('https://phonebookapi.herokuapp.com/api/deletePerson/' + user)
        .then(response => {
            if (response.status === 200) {
                this.loadUsers()
            }
        });
    }

    render() {
        console.log(this.props);
        if (!this.state.persons) {
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
                            {this.state.persons.map(person => {

                                let godina = person.createdAt.slice(0, 4);
                                let mesec = person.createdAt.slice(5, 7);
                                let dan = person.createdAt.slice(8, 10);
                                let fullDate = dan + '/' + mesec + '/' + godina;


                                return (
                                    <tr>
                                        <td>{person.name}</td>
                                        <td>{person.surname}</td>
                                        <td>{fullDate}</td>
                                        <td>{person.city}</td>
                                        <td>{person.address}</td>
                                        <td>{person.phone}</td>
                                        <td>
                                            <Button color='primary' onClick={this.props.saljem} style= {{marginRight: '4%'}} >Edit</Button>
                                            <Button color='danger' onClick={this.deleteUser.bind(this, person._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            )
        }
    }
}


export default Person;