import { useState } from 'react'
import './App.css'
import Login_signup from './login_signup'
import Dashboard from './Dashboard'
import CreateQuiz from './CreateQuiz'
import QuizPublished from './QuizPublished'
import Analytics from './analytics'
import QueAndAns from './QueAndAns'

import UrlPlusText from './Components/responsive/UrlPlusText'
import TextOnly from './Components/responsive/TextOnly'
import QuizCompletion from './Components/responsive/QuizCompletion'
import ImageOnly from './Components/responsive/ImageOnly'
function App() {
  
  return (
    <>
     {/* <QuizPublished></QuizPublished> */}
     {/* <Dashboard></Dashboard> */}
     {/* <Login_signup></Login_signup>  */}
    
     {/* <QuizCompletion></QuizCompletion> */}
     <UrlPlusText></UrlPlusText>
     {/* <CreateQuiz></CreateQuiz> */}
     {/* <Analytics></Analytics> */}
     {/* <QueAndAns></QueAndAns>  */}
     {/* <TextOnly></TextOnly> */}
     {/* <ImageOnly></ImageOnly> */}
    </>
  )
}

export default App