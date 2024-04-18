import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import React, { useState } from "react";
import { mobile } from "../Responsive";
import { login } from "../Redux/apiCall";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
  ${mobile({ width: "70%" })};
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
  /* align-items: center; */
  gap: 5px;
  ${mobile({ gap: "10px" })};
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 10px 0px;
  outline: none;
  ${mobile({ width: "90%", margin: "0px 2px" })};
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 7px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
  cursor: pointer;
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
`;
const Sucess = styled.p`
  color: teal;
`


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {showMsg , setShowMsg} = useState(false)

  const loginHandler = (e) => {
    // console.log("ha chal raha");
    e.preventDefault();
    try {
      login(dispatch, { email, password });
      setShowMsg(true)
      setTimeout(()=>navigate("/"),1500)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email..."
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Passsword..."
          />
          <Button onClick={loginHandler}>Login</Button>
          {showMsg && <Sucess>Login Successfully</Sucess>}
          <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
