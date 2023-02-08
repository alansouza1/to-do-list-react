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
          <button type="submit">Entrar</button>
        </form>
        <Link to="signup">Criar conta</Link>
      </div>
    </>
  );
}
