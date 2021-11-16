import React from "react";
import axios from "axios";

export const SginIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = {
      userName: event.target.userName.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios.post("http://localhost:5000/account/sginin", inputData)
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input name="userName" required />
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};
