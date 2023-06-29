import * as api from "../api";
import { setCurrentUser } from "./currentUser";

export const signup = (authData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    Navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const login = (authData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    Navigate("/");
  } catch (error) {
    console.log(error);
  }
};
