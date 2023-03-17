import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { IUser, IForm } from "@/renderer/types/user";
import { isExist, setToken, removeToken } from "@/renderer/utils/auth";
import * as auth from "@/renderer/api/user";

interface IAuthContext {
  user: IUser | null;
  login: (form: IForm) => void;
  register: (form: IForm) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const me = async () => {
    const { data: user } = await auth.me();
    setUser(user);
  };

  const login = async (form: IForm) => {
    setIsLoading(!isLoading);
    const { data: user } = await auth.login(form);
    setToken(user.token);
    setUser(user);
    setIsLoading(!isLoading);
    if (form.remember) {
      const info = JSON.stringify({ u: form.username, p: form.password });
      localStorage.setItem("account", info);
    } else {
      localStorage.removeItem("account");
    }
  };

  const register = async (form: IForm) => {
    setIsLoading(!isLoading);
    const { data: user } = await auth.register(form);
    setToken(user.token);
    setUser(user);
    setIsLoading(!isLoading);
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  useEffect(() => {
    if (isExist()) {
      me();
    }
  }, []);

  // TODO: hooks的eslint没生效
  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({ user, login, register, logout }),
        [user, login, register, logout]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};
