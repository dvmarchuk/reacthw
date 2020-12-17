import React, {Component} from "react";
import './User.css'

class User extends Component{

    state = {customClass: ''}

    render(){
        let {age,name,status} = this.props;
        let {customClass} = this.state;
        return(<div className={customClass}>
            {age} -
            {name} -
            {status.toString()}
            <button onClick={this.doCheck}>Execute</button>
        </div>);
    }

    doCheck = () => {
        this.setState({customClass: 'change'})
    };
}

export default User;