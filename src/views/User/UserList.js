import React from 'react';
//import './App.css';
import Nav from '../Nav/Nav'
//import axios from 'axios';
import UserReqRes from '../../Services/ReqResService'
import { connect } from 'react-redux';

class UserList extends React.Component {

  state = {
    users: {},
    userService: new UserReqRes('https://reqres.in/api')
  }

  // componentDidMount() {
  //   axios.get("https://reqres.in/api/users?page=2")
  //   .then(res => {
  //     console.log(res);
  //   })
  // }

  async componentDidMount() {
    //let res = await axios.get("https://reqres.in/api/users?page=1");
    let res = await this.state.userService.GetUsers();
    //Check null before set state.
    //this.setState({ users: res && res.data && res.data.data ? res.data.data : [] });
    this.setState({ users: res });
    console.log(this.state.users);
  }
  //react event: https://legacy.reactjs.org/docs/handling-events.html
  deleteStudent = (student) => {
    //console.log(student);
    //call mapDispatchToProps in event.
    this.props.deleteStudent(student);

  }

  render() {
    //users from api
    let { users } = this.state;
    //users from 
    console.log(this.props);
    console.log(this.props.dataRedux);
    let students = this.props.dataRedux;
    return (
      <>
        <Nav />
        <div className='list-user-container'>
          <h3>List users</h3>
          {users && users.length > 0 && this.state.users.map((item, index) => {
            return (
              <div key={item.id}>
                {item.id} - {item.first_name} {item.last_name}
              </div>
            )
          }
          )}
        </div>
        <div className='list-user-container'>
          <br />
          <h3>List student</h3>
          {students && students.length > 0 && students.map((item, index) => {
            return (
              <div key={item.id}>
                {item.id} - {item.name} <span onClick={() => this.deleteStudent(item)}>x</span>
              </div>
            )
          }
          )}
        </div>
      </>
    )

  }

}

//
const mapStateToProps = (state) => {
  return {
    dataRedux: state.students
  };
};

//
const mapDispatchToProps = (dispatch) => {
  return {
    //increment: () => dispatch(increment()),
    //decrement: () => dispatch(decrement()),
    //reset: () => dispatch(reset())
    deleteStudent: (student) => dispatch({ type: "DELETE_STUDENT", payload: student })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
