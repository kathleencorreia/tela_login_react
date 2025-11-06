import { FaUser, FaLock, FaFacebook } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userName);
    // console.log(password);
    alert("Dados enviados");
    setName("");
    setPassword("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        
        <h1>Login</h1>
        <div className="credentials">
         
          <input
            type="email"
            name="email"
            placeholder="username@exemplo.com"
            required
            value={userName}
            onChange={(e) => setName(e.target.value)} //pega o valor que o usuario digita (e-pega o evento, target-elemento alvo, value- o valor do input)
          />
          <FaUser className="icon" />
        </div>
        <div className="credentials">
         
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" name="" id="" /> Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <p>or continue with</p>
        <div id="midea-social">
          <div className="social">
            <FcGoogle className="icon" />
          </div>
          <div className="social">
            <FaFacebook className="icon facebook" />
          </div>
        </div>

        <div className="signup-link">
          <p>
            Don&apos;t have a account yet? <a href="#">Register for free</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
