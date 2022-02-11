import React from "react";
import styled from "styled-components";
import AddBeneficiaries from '../components/AddBeneficiaries'

const Home = () => {
  return (
    <Container>
      <h1>Add Beneficiaries</h1>
      <AddBeneficiaries />
    </Container>
  );
}
const Container = styled.div`
  background-color: #011e3c;
  min-height: 100vh;
  min-width: 100%;
  padding: 20px;
  h1 {
    padding-bottom: 20px;
    color:#fff;
  }
`;

export default Home