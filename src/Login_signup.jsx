import React , { useState } from 'react';
import { useFormik } from 'formik';
import './login_signup.css'; // Corrected the filename to button.css

function Login_signup() {

  const [view, setView] = useState('login');
  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // Your login form submission logic here
      console.log('Login Form Values:', values);
    },
  });

  const formikSignup = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      // Your signup form submission logic here
      setView('login');
      console.log('Signup Form Values:', values);
    },
  });

  const handleLoginClick = () => {
    const loginForm = document.querySelector("form.login");
    const loginText = document.querySelector(".title-text .login");
    setView('login');
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };

  const handleSignupClick = () => {
    const loginForm = document.querySelector("form.login");
    const loginText = document.querySelector(".title-text .login");
    setView('signup')
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    
  };

  const handleSignupLinkClick = (e) => {
    const signupRadio = document.getElementById("signup");
    signupRadio.checked = true;
    handleSignupClick();
    e.preventDefault();
  };

  return (
      <div className="login_root">
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">QUIZZIE</div>
          <div className="title signup">QUIZZIE</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="signup" className='selectionLogSign' />
            <input type="radio" name="slide" id="login" className='selectionLogSign' defaultChecked />
            <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
              Login
            </label>
            <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {/* Login Form */}
            <form onSubmit={formikLogin.handleSubmit} className="login">
              <div className="field">
                <label htmlFor="loginEmail">Email Address</label>
                <input
                  type="text"
                  id="loginEmail"
                  placeholder="Enter your email"
                  required
                  {...formikLogin.getFieldProps('email')}
                />
              </div>
              <div className="field">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Enter your password"
                  required
                  {...formikLogin.getFieldProps('password')}
                />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="" onClick={handleSignupLinkClick}>Signup now</a>
              </div>
            </form>

            {/* Signup Form */}
            <form onSubmit={formikSignup.handleSubmit} className="signup">
              <div className="field">
                <label htmlFor="signupName">Name</label>
                <input
                  type="text"
                  id="signupName"
                  placeholder="Enter your name"
                  required
                  {...formikSignup.getFieldProps('name')}
                />
              </div>
              <div className="field">
                <label htmlFor="signupEmail">Email Address</label>
                <input
                  type="text"
                  id="signupEmail"
                  placeholder="Enter your email"
                  required
                  {...formikSignup.getFieldProps('email')}
                />
              </div>
              <div className="field">
                
                <label htmlFor="signupPassword">Password</label>
                <input
                  type="password"
                  id="signupPassword"
                  placeholder="Enter your password"
                  required
                  {...formikSignup.getFieldProps('password')}
                />
                
              </div>
              <div className="field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  {...formikSignup.getFieldProps('confirmPassword')}
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_signup;


// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import './login_signup.css'; // Corrected the filename to button.css
// import Dashboard from './Dashboard'; // Import your Dashboard component

// function LoginSignup() {
//   const [currentView, setCurrentView] = useState('login');

//   const formikLogin = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     onSubmit: values => {
//       // Your login form submission logic here
//       console.log('Login Form Values:', values);
//       // Navigate to Dashboard after successful login
//       setCurrentView('dashboard');
//     },
//   });

//   const formikSignup = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     onSubmit: values => {
//       // Your signup form submission logic here
//       console.log('Signup Form Values:', values);
//       // After successful signup, move to login view
//       setCurrentView('login');
//     },
//   });

//   const handleSignupLinkClick = (e) => {
//     // Switch to the signup view
//     setCurrentView('signup');
//     e.preventDefault();
//   };

//   return (
//     <div id="main_base">
//       <div className="wrapper">
//         <div className="title-text">
//           <div className="title login">QUIZZIE</div>
//           <div className="title signup">QUIZZIE</div>
//         </div>
//         <div className="form-container">
//           <div className="slide-controls">
//             <input type="radio" name="slide" id="signup" checked={currentView === 'signup'} />
//             <input type="radio" name="slide" id="login" checked={currentView === 'login'} />
//             <label htmlFor="login" className="slide login" onClick={() => setCurrentView('login')}>
//               Login
//             </label>
//             <label htmlFor="signup" className="slide signup" onClick={() => setCurrentView('signup')}>
//               Signup
//             </label>
//             <div className="slider-tab"></div>
//           </div>
//           <div className="form-inner">
//             {/* Login Form */}
//             {currentView === 'login' && (
//               <form onSubmit={formikLogin.handleSubmit} className="login">
//                 <div className="field">
//                   <label htmlFor="loginEmail">Email Address</label>
//                   <input
//                     type="text"
//                     id="loginEmail"
//                     placeholder="Email"
//                     required
//                     {...formikLogin.getFieldProps('email')}
//                   />
//                 </div>
//                 <div className="field">
//                   <label htmlFor="loginPassword">Password</label>
//                   <input
//                     type="password"
//                     id="loginPassword"
//                     placeholder="Password"
//                     required
//                     {...formikLogin.getFieldProps('password')}
//                   />
//                 </div>
//                 <div className="pass-link">
//                   <a href="#">Forgot password?</a>
//                 </div>
//                 <div className="field btn">
//                   <div className="btn-layer"></div>
//                   <input type="submit" value="Login" />
//                 </div>
//                 <div className="signup-link">
//                   Not a member? <a href="" onClick={handleSignupLinkClick}>Signup now</a>
//                 </div>
//               </form>
//             )}

//             {/* Signup Form */}
//             {currentView === 'signup' && (
//               <form onSubmit={formikSignup.handleSubmit} className="signup">
//                 <div className="field">
//                   <label htmlFor="signupName">Name</label>
//                   <input
//                     type="text"
//                     id="signupName"
//                     placeholder="Name"
//                     required
//                     {...formikSignup.getFieldProps('name')}
//                   />
//                 </div>
//                 <div className="field">
//                   <label htmlFor="signupEmail">Email Address</label>
//                   <input
//                     type="text"
//                     id="signupEmail"
//                     placeholder="Email"
//                     required
//                     {...formikSignup.getFieldProps('email')}
//                   />
//                 </div>
//                 <div className="field">
//                   <label htmlFor="signupPassword">Password</label>
//                   <input
//                     type="password"
//                     id="signupPassword"
//                     placeholder="Password"
//                     required
//                     {...formikSignup.getFieldProps('password')}
//                   />
//                 </div>
//                 <div className="field">
//                   <label htmlFor="confirmPassword">Confirm Password</label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     placeholder="Confirm Password"
//                     required
//                     {...formikSignup.getFieldProps('confirmPassword')}
//                   />
//                 </div>
//                 <div className="field btn">
//                   <div className="btn-layer"></div>
//                   <input type="submit" value="Signup" />
//                 </div>
//               </form>
//             )}

//             {/* Dashboard */}
//             {currentView === 'dashboard' && (
//               <Dashboard />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginSignup;
