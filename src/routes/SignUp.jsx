import { Link } from 'react-router-dom';
import '../styles/pages/SignUp.css';

export default function SignUp() {
  return (
    <>
      <form method="post">
        <label htmlFor="name-input">Nome</label>
        <input
          id="name-input"
          className="form-input"
          name="name"
          type="text"
        />

        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          className="form-input"
          name="email"
          type="email"
        />

        <label htmlFor="password-input">Senha</label>
        <input
          id="password-input"
          className="form-input"
          name="password"
          type="password"
        />

        <button type="submit" className="signup-button">Cadastre-se</button>
      </form>
      <p className="login-page">Já possui uma conta? <Link to="/">Entrar</Link></p>
    </>
  );
}
