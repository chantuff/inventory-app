// import dependencies
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
// import App from './pages/App/App.jsx'
// import my functionality that I've added
import { getUser } from '../../utilities/users-services';

// css
// import './App.css'
import styles from './App.module.css';

//
// import pages
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage.jsx';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Navigate } from 'react-router-dom';

// import components
import NavBar from '../../components/NavBar/NavBar.jsx';

function App() {
  const [user, setUser] = useState(getUser());

  // in here
  // use the useState hook to define a state variable called user
  // initialize that to null
  // the setter function should be named according to convention
  return (
    <main className={styles.App}>
      {
        user
          ?
          <>
            <NavBar user={user} setUser={setUser}/>
            < Routes >
              <Route path='/orders/new' element={<NewOrderPage />}/>
              <Route path='/orders' element={<OrderHistoryPage />}/>
              {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
              <Route path="/*" element={<Navigate to="/orders/new" />} />
            </Routes>
          </>
          :
          < AuthPage setUser={setUser} />
      }
    </ main>
  )
}

export default App
