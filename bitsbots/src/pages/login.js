import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState(" ");
  const [password, setPassword] = useState(" ");

  const [error, setError] = useState(" ");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate.push(ROUTES.HOMEPAGE);
    } catch (error) {
      setEmailAddress(" ");
      setPassword(" ");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Bits&Bots";
  }, []);

  return (
    <div className="login__container">
      <div className="loginform">
        <p>I will be the form</p>
        {error && <p classname="error-text">{error}</p>}

        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email addres"
            type="text"
            placeholder="Email address"
            classname="login__input"
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            classname="login__input"
            onChange={({ target }) => setPassword(target.value)}
          />

          <button disabled={isInvalid} type="submit" classname="login__submit">
            Log in
          </button>
        </form>
      </div>
      <div className="create__account">
        <p>
          Don't have an account?{``}
          <Link to="/signup" className="signup__link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
