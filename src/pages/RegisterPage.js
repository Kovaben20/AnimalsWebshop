import React, { useState } from "react";
import { register } from "../utils/storage";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (register(username)) {
      setMsg("Sikeres regisztráció!");
    } else {
      setMsg("Ez a felhasználónév már foglalt!");
    }
  };

  return (
    <div>
      <h2>Regisztráció</h2>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Felhasználónév"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Regisztráció</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default RegisterPage;