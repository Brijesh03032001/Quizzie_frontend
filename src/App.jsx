import { useState } from "react";
import "./App.css";
import Login_signup from "./login_signup";
import Dashboard from "./Dashboard";
import CreateQuiz from "./CreateQuiz";
import QuizPublished from "./QuizPublished";
import Analytics from "./analytics";
import QueAndAns from "./QueAndAns";
function App() {
  return (
    <>
      <QuizPublished></QuizPublished>
      {/* <Dashboard></Dashboard> */}
      {/* <Login_signup></Login_signup> */}

      {/* <CreateQuiz></CreateQuiz> */}
      {/* <Analytics></Analytics> */}
      {/* <QueAndAns></QueAndAns> */}
    </>
  );
}

export default App;
