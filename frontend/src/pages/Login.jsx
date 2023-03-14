import { useSelector } from "react-redux";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
    error,
    isError,
    handleSubmit,
  } = useLogin();
   
  const {user}=useSelector(store=>store.users)
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

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

      <button disabled={isLoading}>Log in</button>
      {isError && <div className="error">{error?.data?.msg}</div>}
    </form>
  );
};

export default Login;
