import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="login-form">
        <form>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            className="form-input"
            name="email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <label htmlFor="password-input">Senha</label>

          <input
            id="password-input"
            className="form-input"
            name="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="button" className="login-button">Entrar</button>
        </form>
        <Link className="register-button" to="signup">Criar conta</Link>
      </div>
    </>
  );
}
