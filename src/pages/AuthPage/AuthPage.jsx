import { useState } from 'react'
import styles from './AuthPage.module.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
// import LoginForm from '../../components/LoginForm'
import LoginForm from '../../components/LoginForm/LoginForm'
// import Logo from '../../components/Logo/Logo'

function AuthPage(props) {
  const [ showLogin, setShowLogin ] = useState(true);

  return (
    // <main className={styles.AuthPage} >
    //         {/* <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'No account, SIGN UP here!' : 'LOG IN'}</h3>
    // { showLogin ? <LoginForm setUser={props.setUser} /> : <SignUpForm setUser={props.setUser}/>} */}
    <div className='container'>
      <div className='box signin'>
        <h2>Already have an Account?</h2>
        <button className='signinBtn'>Sign In</button>
      </div>
      <div className='box signup'>
        <h2>Don't have an Account?</h2>
        <button className='signupBtn'>Sign Up</button>
      </div>
    </div>
    // </ main>
  )
}

export default AuthPage