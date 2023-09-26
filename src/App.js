// // components can be classes or functions.
// // classes are old school.
// // hooks and state importatnt in functional components.

// // import React from 'react'
// // dont have to import react anymore while making any component.

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import Feedbackstats from "./components/Feedbackstats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLInk from "./components/AboutIconLInk"


function App() {   
    return (
        <FeedbackProvider>
    <BrowserRouter>
        <Header title = "FeedBack UI" bgColor="pink" textColor ="blue" />
        <div className="container">
            <Routes>
            <Route exact path='/'
                element={
                <div>
                    <FeedbackForm />
                    <Feedbackstats />
                    <FeedbackList />
                </div>
                }>
            </Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            </Routes>
            <AboutIconLInk />
        </div>
    </BrowserRouter>
    </FeedbackProvider>
  )
}


export default App