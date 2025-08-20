import React, { useState } from "react";
import { login } from "../utils/storage";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username)) {
      setMsg("Sikeres bejelentkezés!");
    } else {
      setMsg("Hibás felhasználónév!");
    }
  };

  return (
    <div>
      <h2>Bejelentkezés</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Felhasználónév"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Belépés</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default LoginPage;