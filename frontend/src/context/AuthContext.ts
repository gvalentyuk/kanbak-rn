import { createContext } from "react";

type User = {
  name: string;
  email: string;
  tasks: any[];
  token: string;
  id: string;
};

export const AuthContext = createContext({
  isLogged: false,
  login: (user: User) => {},
  logout: () => {},
  user: { name: "", email: "", tasks: [], token: "" },
});
