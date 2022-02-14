import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <Container>
      <div className="text">
        <h1> Success </h1>
        <h2>All signed up</h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #011e3c;
  min-height: 100vh;
  min-width: 100%;
  .text {
    text-align: center;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default Success;
