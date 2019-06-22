import * as AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import Socket from "../util/Socket";
import { store } from "../App";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const INIT_SESSION_ID = "INIT_SESSION_ID";

export const login = (username, password) => {
  Socket.getSocket().emit("user.login", {
    log_BN: username,
    log_PW: password
  });
};

export const logout = () => {
  AsyncStorage.setItem("session_id", "").then(() => {
    store.dispatch({
      type: LOGOUT,
      payload: null
    });
  });
};