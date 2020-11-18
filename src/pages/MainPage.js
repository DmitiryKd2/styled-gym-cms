import React from 'react'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'

export default function MainPage({children}) {
    return (
        <div>
            MainPage
            {children}
        </div>
    )
}
