import styled from "styled-components";

export const LoginContainer = styled.form`
  margin: 5vh;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  max-width: 900px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  font-family: Montserrat;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0 1em;
    font-weight: 600;
  }

  a {
    color: white;
    font-size: 0.8rem;
    text-align: center;
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    color: white;
    background: #333;
    outline: none;
    padding: 0.7rem 1.8rem;
    box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
  }

  button:hover {
    filter: brightness(110%);
  }

  button:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }

  form p:last-of-type {
    margin: -10px 0 10px 16px;
  }
`;

export const FormControl = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;

  & label {
    margin-bottom: 0.5rem;
  }

  & input {
    border: none;
    outline: none;
    line-height: 1.5rem;
    font-size: 1.3rem;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
    font-family: Montserrat;
  }
`;
