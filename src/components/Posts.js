import React, { Component } from "react";

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({posts: data}));
  }

  render() {
    const postsItems = this.state.posts.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      )
    });

    console.log(postsItems);

    return (
      <div>
        <h1>Posts...</h1>
        {postsItems}
      </div>
    )
  }

}

export default Posts;