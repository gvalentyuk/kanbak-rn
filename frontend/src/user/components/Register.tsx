import { useState, useContext } from "react";
import { useHttp } from "../../hooks/httpHook";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FormControl, LoginContainer } from "./login.styles";

const Register: React.FC = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest } = useHttp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URI}/user/registration`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          email,
          password,
          name,
        })
      );
      auth.login(responseData);
    } catch (e) {}
  };

  return (
    <LoginContainer onSubmit={onSubmit}>
      <h3>Registration</h3>
      <FormControl>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Link to={"login"}>I already have an account</Link>
      {error && <p>{error}</p>}
      {isLoading ? <p>Loading</p> : <button>Registration</button>}
    </LoginContainer>
  );
};

export default Register;
