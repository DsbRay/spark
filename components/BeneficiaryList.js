import React from "react";
import styled from "styled-components";
import trashIcon from "../images/trash-icon.svg";
import Image from "next/image";
const BeneficiaryList = ({ data }) => {
  const renderAddedBeneficiaries = () => {
    return data.map((item, i) => {
      return (
        <Block key={i}>
          <p>
            Name: <span>{item.name}</span>
          </p>
          <p>
            Surname: <span>{item.surname}</span>
          </p>
          <p>
            Email: <span>{item.email}</span>
          </p>
          <div className="image">
            <Image src={trashIcon} alt="trash icon" />
          </div>
        </Block>
      );
    });
  };
  return <Container>{renderAddedBeneficiaries()}</Container>;
};
const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;

const Block = styled.div`
  border-radius: 20px;
  padding: 20px;
  position: relative;
  box-shadow: 3px 3px 11px 2px rgba(30, 73, 118, 0.5);
  background-color: rgb(26 48 70);
  p {
    padding-bottom: 10px;
    color: #0059b2;
    span {
      color: #fff;
    }
  }
  .image {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`;
export default BeneficiaryList;
