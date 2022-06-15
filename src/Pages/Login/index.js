import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch,register } from "../../Context";
import styles from "./login.module.css";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useAuthDispatch();
  let navigate = useNavigate();
  const { loading, errorMessage } = useAuthState(); //lee los valores del loading y errorMessages del contexto

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { email, password });
       console.log(response,'response-index');
      if (!response) return;
      navigate("/dashboard");
      console.log('dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      let response = await register(dispatch, { email, password });
       console.log(response,'response-index');
      if (!response) return;
      navigate("/dashboard");
      console.log('dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={{ width: 200 }}>
        <h1 className={styles.textTitle}>Login</h1>
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label  className={styles.label} htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <button class="button"onClick={handleLogin} disabled={loading}>
            login
          </button>
          <button class="button" onClick={handleRegister} disabled={loading}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;