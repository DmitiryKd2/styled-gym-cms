import React, {useState} from 'react'
import GlobalStyles from './componenst/global/GlobalStyles'
import Login from './pages/Login'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import UserContext from './context/UserContext'

export default function App() {
  const [userData, setUserData] = useState({user: undefined, jwtToken: undefined})
  
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <UserContext.Provider value={{userData, setUserData}}>
          <Switch>          
            <Route exact path='/'><Login/></Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

