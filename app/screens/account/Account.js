import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import Loadding from "../../components/Loading";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loadding isVisible={true} text="Cargando..." />;
  return login ? <UserLogged /> : <UserGuest />;
}
