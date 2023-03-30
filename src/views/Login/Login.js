import React from 'react';
import './Login.scss';
import { Navigate } from "react-router-dom";

class Login extends React.Component {

  state = { user: null, error: null };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      //let user = await login(event.target);
      let user = { 'username': "tuan", 'password': "tuan" }
      this.setState({ user });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    let { user, error } = this.state;
    return (
      <>
        {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/home" replace={true} />
        )}
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" name="username" className="login__input" placeholder="User name / Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" name="password" className="login__input" placeholder="Password" />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Log In</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>

              {/* <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a href="#" className="social-login__icon fab fa-instagram"></a>
                  <a href="#" className="social-login__icon fab fa-facebook"></a>
                  <a href="#" className="social-login__icon fab fa-twitter"></a>
                </div>
              </div> */}

            </div>

            <div className="screen__background">
              {/* <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span> */}
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>

          </div>
        </div>
      </>
    );
  }
}









// class Login extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       mode: this.props.mode
//     }

//   }
//   toggleMode() {
//     var newMode = this.state.mode === 'login' ? 'signup' : 'login';
//     this.setState({ mode: newMode });
//   }

//   render() {
//     //let navigate = useNavigate();
//     return (
//       <div>
//         <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
//         <section className={`form-block form-block--is-${this.state.mode}`}>
//           <header className="form-block__header">
//             <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
//             <div className="form-block__toggle-block">
//               <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
//               <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
//               <label htmlFor="form-toggler"></label>
//             </div>
//           </header>
//           <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
//         </section>
//       </div>
//     )
//   }

// }

// class LoginForm extends React.Component {
//   constructor(props) {
//       super(props);
//   }
//   render() {
//       return (
//       <form onSubmit={this.props.onSubmit}>
//           <div className="form-block__input-wrapper">
//               <div className="form-group form-group--login">
//                   <input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
//                   <input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
//               </div>
//               {/* <div className="form-group form-group--signup">
//                   <input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
//                   <input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
//                   <input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
//                   <input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
//               </div> */}
//           </div>
//           <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
//       </form>
//       )
//   }
// }



export default Login;
