import { styled } from "styled-components";
import React from "react";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 35%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${mobile({ width: "80%" })};
`;

const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 15px 0px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 5px;
  margin: 8px 8px;
  outline: none;
  ${mobile({ margin: "8px",border : "0.5px solid #000" })};
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 10px 8px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 7px 20px;
  margin: 0 auto;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an </Title>
        <Form>
          <Input placeholder="Enter Username..." />
          <Input placeholder="Enter Email..." />
          <Input placeholder="Enter Passsword..." />
          <Input placeholder="Enter ConfirmPassword..." />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
