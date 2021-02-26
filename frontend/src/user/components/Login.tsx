import { useState, useContext } from "react";
import { useHttp } from "../../hooks/httpHook";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FormControl, LoginContainer } from "./login.styles";

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        `${process.env.BACKEND_URI}/user/login`,
        "POST",
        {
          "Content-Type": "application/json",
        },
        JSON.stringify({
          email,
          password,
        })
      );
      auth.login(responseData);
    } catch (e) {}
  };

  return (
    <LoginContainer onSubmit={onSubmit}>
      <h3>Login</h3>
      <FormControl>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Link to={"/register"}>I don't have an account</Link>
      {isLoading ? <p>Loading</p> : <button>Login</button>}
    </LoginContainer>
  );
};

export default Login;
