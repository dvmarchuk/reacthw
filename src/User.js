import React, {Component} from "react";
import './User.css'

class User extends Component{

    render(){
        let {item} = this.props;
        return (<div>
            {item.userId} -
            {item.id} -
            {item.title} -
            {item.body}
        </div>);
    }
}

export default User;