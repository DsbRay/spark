import React, { useState } from "react";
import styled from "styled-components";
import BeneficiaryForm from "./BeneficiaryForm";
import BeneficiaryList from "./BeneficiaryList";
const DUMMY_DATA = [
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
  {
    name: "asd",
    surname: "asd",
    email: "asd",
  },
];
const AddBeneficiaries = () => {
  const [list, setList] = useState(DUMMY_DATA);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  // Submit
  const handleSubmit = () => {
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
        handleSubmit();
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
        <Button
          className={list.length >= 5 ? "disabled" : ""}
          onClick={() => {
            handleCheckValues();
          }}
        >
          &#43;
        </Button>
      </div>
      <BeneficiaryList data={list} />
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
`;

const Button = styled.button`
  font-size: 25px;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: none;
  background-color: #0059b2ed;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.7;
  }
`;
export default AddBeneficiaries;
