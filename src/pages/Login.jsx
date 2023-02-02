export default function Login() {
  return (
    <>
      <form method="post">
        <label htmlFor="email-input">
          Email
          <input
            id="email-input"
            name="email"
            type="email"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            id="password-input"
            name="password"
            type="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <a href="/">Criar uma conta</a>
    </>
  );
}
