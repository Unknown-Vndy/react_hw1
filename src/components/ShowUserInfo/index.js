import React from "react";
import "./ShowUserInfo.module.css";
import { useState } from "react";
const ShowUserInfo = (props) => {
  const { name, age, src } = props;
  let [count, setCount] = useState(0);
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
      <button onClick={() => setCount(++count)}>Like</button>
    </>
  );
};

export default ShowUserInfo;
