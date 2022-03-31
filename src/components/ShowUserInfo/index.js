import React, { Component, useState } from "react";

class ShowUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseLikeCount = (e) => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    const { name, age, src } = this.props;

    return (
      <>
        <div>
          <img
            src={src}
            alt=""
            className="user-photo"
            width="200px"
            height="300px"
          />
        </div>
        <p>
          My name is {name} I am {age} years old
        </p>
        <p>likes {count}</p>
        <button onClick={this.increaseLikeCount}>Like</button>
      </>
    );
  }
}

export default ShowUserInfo;
