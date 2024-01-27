
import React from 'react';
import './dashboard.css'
import nameLogo from './assets/QUIZZIE.png'
function Dashboard() {
  return (
    <div className="Dashboard_mainContainer__FhjzR">
    <div className="Dashboard_sideBar__zpysS">
      <a href="/dashboard" style={{ textDecoration: 'none' }}>
        <div className="Dashboard_logo__rkfXJ"><img src={nameLogo} alt="Logo" /></div>
      </a>
      <div className="Dashboard_modesContainer__xJKh-">
        <button className="Dashboard_modeBtn__MghC6 Dashboard_activeScreen__iG-0C">Dashboard</button>
        <button className="Dashboard_modeBtn__MghC6 ">Analytics</button>
        <button className="Dashboard_modeBtn__MghC6 ">Create Quiz</button>
      </div>
      < hr/>
      <button className="Dashboard_logoutBtn__qIrb+">LOGOUT</button>
    </div>
    <div className="Dashboard_subContainer__k+h33">
   <div className="Dashboard_dashboardScreen__hB09h">
      <div className="Dashboard_dashboardMainCard__Zh6yi">
         <div className="Dashboard_totalQuiz__zExuX">
            <div className="Dashboard_dashboardQuizDataNumbers__4UGMm">0</div>
            Quizzes Created
         </div>
         <div className="Dashboard_totalQuestions__T4NKj">
            <div className="Dashboard_dashboardQuizDataNumbers__4UGMm">0</div>
            Questions Created
         </div>
         <div className="Dashboard_totalImpressions__EyCK8">
            <div className="Dashboard_dashboardQuizDataNumbers__4UGMm">0</div>
            Impressions
         </div>
      </div>
      <div>
         <h2>Trending Quiz</h2>
         <div className="Dashboard_trendingQuizCardContainer__qH+e1 Dashboard_firstQuiz__VYk7x">
            <p className="Dashboard_firstQuizPara__9COZF">You haven't created any Quiz, Click on Create Quiz to create your first Quiz</p>
         </div>
      </div>
   </div>
</div>
     </div>
  );
}

export default Dashboard;
