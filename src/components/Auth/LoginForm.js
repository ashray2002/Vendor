import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserAuth } from "./context/UserAuthContext";
import { auth } from "../../firebase";
import styles from "./Login.module.css";

function LoginForm() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { logIn } = useUserAuth();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/phone-verification");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <input
          type="email"
          placeholder="Enter email address"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={values.pass}
          onChange={(e) => setValues({ ...values, pass: e.target.value })}
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button
            id="loginButton"
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
