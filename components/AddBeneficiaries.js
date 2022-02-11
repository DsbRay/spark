import React, { useState } from "react";
import styled from "styled-components";
import BeneficiaryForm from "./BeneficiaryForm";
import BeneficiaryList from "./BeneficiaryList";

const AddBeneficiaries = () => {
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  // Submit
  const handleAddBenificiary = () => {
    const checkEmail = list.some((item) => item.email === email);
    if (checkEmail) {
      setErrorMessage("Duplicate email entered");
    } else {
      setList([...list, { name, surname, email }]);
      handleClearForm();
    }
  };
  // Clear form values
  const handleClearForm = () => {
    setErrorMessage("");
    setName("");
    setSurname("");
    setEmail("");
  };
  // Check if values are entered
  const handleCheckValues = () => {
    if ((name, surname, email)) {
      let validEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (validEmail.test(email)) {
        handleAddBenificiary();
      } else {
        setErrorMessage("Email not valid");
      }
    } else {
      setErrorMessage("Please enter Details");
    }
  };
  // Delete
  const handleDelete = (email) => {
    setList(list.filter((item) => item.email !== email));
  };
  // OnChange handlers
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleSurnameChange = (e) => {
    const { value } = e.target;
    setSurname(value);
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  return (
    <Container>
      <div>
        <BeneficiaryForm
          name={name}
          surname={surname}
          email={email}
          handleNameChange={handleNameChange}
          handleSurnameChange={handleSurnameChange}
          handleEmailChange={handleEmailChange}
        />
        {errorMessage && <Error>{errorMessage}</Error>}

        <ButtonContainer>
          <button
            className={list.length >= 5 ? "disabled" : ""}
            onClick={() => {
              handleCheckValues();
            }}
          >
            &#43;
          </button>
          <p>
            {list.length >= 5 ? "Maximum beneficiaries reached" : "Add new"}
          </p>
        </ButtonContainer>
        <SubmitButton onClick={() => {}}>Submit</SubmitButton>
      </div>
      <BeneficiaryList data={list} handleDelete={handleDelete} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 50px;
`;
const Error = styled.p`
  color: red;
  padding: 10px 0;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  p {
    color: #fff;
    font-size: 12px;
  }
  button {
    font-size: 25px;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: none;
    background-color: #0059b2ed;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.25s ease;
    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #0059b2;
  border: none;
  color: #fff;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.25s ease;
  &.disable {
    opacity: 0.6;
    pointer-events: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export default AddBeneficiaries;
