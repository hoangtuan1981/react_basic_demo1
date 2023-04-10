import React from 'react';
//import './App.css';
import Nav from '../Nav/Nav'
//import axios from 'axios';
import UserReqRes from '../../Services/ReqResService'

class UserList extends React.Component {

  state = {
    users: {},
    userService : new UserReqRes('https://reqres.in/api')
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
  render() {
    let { users } = this.state;
    return (
      <>
        <Nav />
        <div className='list-user-container'>
          <h3>List users</h3>
          { users && users.length > 0 && this.state.users.map((item, index) => {
            return (
              <div key={item.id}>
                {item.id} - {item.first_name} {item.last_name}
              </div>
            )}
          )}
        </div>
      </>
    )

  }

}

export default UserList;
