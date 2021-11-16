import React from "react";

export const LogIN = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.userName.value);
  };

  return (
    <form onSubmit={(event) => {handleSubmit(event)}}>
      <input name="userName"  />
      <input type="email" name="email"  />
      <input type="password" name="password"  />
      <button
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        submit
      </button>
    </form>
  );
};
