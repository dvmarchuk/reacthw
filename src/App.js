import React, {Component} from 'react';
import {users} from './database';
import User from "./User";


//2nd part with json database with post+comments


class App extends Component{

    render() {
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

