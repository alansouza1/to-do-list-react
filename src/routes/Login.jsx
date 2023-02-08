import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import '../styles/pages/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header />
      <div className="login-form">
        <form method="post">
          <label htmlFor="email-input">
            Email
            <input
              id="email-input"
              name="email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              id="password-input"
              name="password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <Link to="signup">Criar conta</Link>
      </div>
    </>
  );
}
