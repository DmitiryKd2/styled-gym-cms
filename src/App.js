import React, {useState} from 'react'
import GlobalStyles from './componenst/global/GlobalStyles'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import UserContext from './context/UserContext'
import Login from './pages/Login'
import MainPage from './pages/MainPage'
import TestPage from './pages/TestPage'
import VerticalNavBar from './componenst/global/VerticalNavBar'
import SearchField from './componenst/global/SearchField'
import Reports from './pages/Reports'

export default function App() {
  const [userData, setUserData] = useState({user: undefined, jwtToken: undefined})
  
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <UserContext.Provider value={{userData, setUserData}}>
          <Switch>          
            <Route exact path='/'>
            {userData.user ? <Redirect to="/main-page" /> : <Login />}
            </Route>
            <VerticalNavBar>
              <Route path='/main-page'>
                  <SearchField>s</SearchField>
              </Route>
              <Route path='/report' >
                <Reports></Reports>
              </Route>
              <Route path='/test'>Test path</Route>
            </VerticalNavBar>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

