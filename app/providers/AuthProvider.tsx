import { onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { db, login, register, logout, auth } from "../utils/firebase";

interface IContext {
  user: User | null
  isLoading: boolean
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export let AuthContext = createContext<IContext>({} as IContext);

export let AuthProvider: FC = ({ children }) => {
  let [user, setUser] = useState<User | null>(null);
  let [isLoadingInitial, setIsLoadingInitial] = useState(true);
  let [isLoading, setIsLoading] = useState(false);

  let registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      let { user } = await register(email, password);

      await addDoc(collection(db, "users"), {
        _id: user.uid,
        displayName: "No Name",
      });
    } catch (error: any) {
      Alert.alert("Error reg: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  let loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert("Error login: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  let logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert("Error logout: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    []
  );

  let value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
