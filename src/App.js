import React, {Component} from 'react';
import User from "./User";




class App extends Component{

    state = {posts: []};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts})
            });
    }

    render() {

        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map((post, index) => <User item={post} key={post.userId}/>)
                }
            </div>
        );
    }
}

export default App;

