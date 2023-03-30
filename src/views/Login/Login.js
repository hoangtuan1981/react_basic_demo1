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
      <div>
        {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/home" replace={true} />
        )}
        <h2>Login Form</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <div>
              <b>User name</b>
            </div>
            <div>
              <input type="text" name="username" placeholder="Enter username"/>
            </div>
          </div>
          <div>
            <div>
              <b>Password</b>
            </div>
            <div>
              <input type="password" name="password" placeholder="Enter Password"/>
            </div>
          </div>
          <div>
            <button className="button button--primary" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
          </div>

        </form>
      </div>
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
