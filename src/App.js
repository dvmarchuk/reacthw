import React, {Component} from 'react';
import {users} from './database';
import User from "./User";


//2nd part with json database with post+comments


class App extends Component{

    state = {users: []};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users})
            }
    }

    render() {

        let {users} = this.state;
        return (
            <div>
                {
                    users.map((user, index) => <User {...user} key={index}/>)
                }
            </div>
        );
    }
}

export default App;

