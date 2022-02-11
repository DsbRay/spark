import React from "react";
import styled from "styled-components";

const FormList = ({
  name,
  surname,
  email,
  handleNameChange,
  handleSurnameChange,
  handleEmailChange,
}) => {
  return (
    <Container>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleSurnameChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </Container>
  );
};
const Container = styled.div`
  box-shadow: 3px 3px 11px 2px rgba(30, 73, 118, 0.5);
  background-color: rgb(26 48 70);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 250px;
  border-radius: 25px;
  padding: 20px;
  gap: 25px;
  div {
    display: grid;
  }
  label {
    color: #fff;
    padding-bottom: 5px;
  }
  input {
    background-color: #0059b2;
    border: none;
    border-radius: 20px;
    padding: 10px;
  }
`;
export default FormList;
