import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
type AuthorizationContext = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};
const authorizationContext = createContext<AuthorizationContext>({
  user: null,
  setUser: () => { }
})
const AuthorizationProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null)
  return (
    <authorizationContext.Provider value={{ user, setUser }}>
      {children}
    </authorizationContext.Provider>
  )
}

export { AuthorizationProvider, authorizationContext }