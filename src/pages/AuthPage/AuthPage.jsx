import { useState } from 'react'

import styles from './AuthPage.module.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LogInForm/LogInForm';
// import Logo from '../../components/Logo/Logo'

function AuthPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleLogin = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <main className={`container ${isLoginForm ? 'slide' : ''}`}>
        <div className="box signin">
          <h2>Already have an account?</h2>
          <button className="signinBtn" onClick={toggleLogin}>
            Sign In
          </button>
        </div>
        <div className="box signup">
          <h2>Don't have an account?</h2>
          <button className="signupBtn" onClick={toggleLogin}>
            Sign Up
          </button>
        </div>
        <div className="formBx">
          <div className={`form signinform ${isLoginForm ? 'active' : ''}`}>
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Log In" />
            </form>
          </div>
          <div className={`form signupform ${isLoginForm ? '' : 'active'}`}>
            <form>
              <h3>Sign Up</h3>
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <input type="submit" value="Register" onClick={toggleLogin} />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AuthPage