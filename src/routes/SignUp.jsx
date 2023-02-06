export default function SignUp() {
  return (
    <>
      <form method="post">
        <label htmlFor="name-input">
          Nome
          <input
            id="name-input"
            name="name"
            type="text"
          />
        </label>
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
        <button type="submit">Cadastre-se</button>
      </form>
      <a href="/">Entrar</a>
    </>
  );
}
