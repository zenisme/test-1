"use client"
import { createContext, useContext, useReducer, ReactNode } from 'react';

// Define AuthContextType outside
export type AuthContextType = {
  user: any;
  token: string;
  role: string;
  dispatch?: React.Dispatch<any>;
};

export const AuthContext = createContext<AuthContextType & { dispatch: React.Dispatch<any> }>({
  user: null,
  token: '',
  role: '',
  dispatch: () => { },
});

interface Props {
  children: ReactNode;
}


const initialState = {
  user: {},
  token: "",
  role: ""
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      return { ...state, user: action.payload.user, token: action.payload.token, role: action.payload.role };
    case 'LOGOUT':
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      return { ...state, user: {}, token: "", role: "" };
    default:
      return state;
  }
};


export const AuthProvider: React.FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}


