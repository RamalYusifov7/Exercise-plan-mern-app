import { useRegister } from "../hooks/useRegister";

function Register() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    error,
    isError,
    handleSubmit,
    isLoading
  } = useRegister();

  console.log(error);
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Sign up</button>
      {isError && <div className="error">{error?.data?.msg}</div>}
    </form>
  );
}

export default Register;
