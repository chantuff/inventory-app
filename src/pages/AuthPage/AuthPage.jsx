import React from 'react'
import styles from './AuthPage.module.css';
import SignUpForm from '../../components/SignUpForm'
import LoginForm from '../../components/LoginForm'
import { useState } from 'react';

function AuthPage(props) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
    <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
    <SignUpForm setUser={props.setUser}/>
    <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage