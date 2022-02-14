import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <Container>
      <h1> Success </h1>
    </Container>
  );
};

const Container = styled.div`
  background-color: #011e3c;
  min-height: 100vh;
  min-width: 100%;
  h1 {
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default Success;
