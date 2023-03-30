import React from 'react';
//import './App.css';
import Nav from '../Nav/Nav'
import AddToDo from './AddToDo';

class ToDoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todolist: [
        { id: 1, title: " To do 1" },
        { id: 2, title: " To do 2" },
        { id: 3, title: " To do 3" },
        { id: 4, title: " To do 4" }
      ],
      currenttodo: {}
    };
  }

  AddNewTodo = (todo) => {

    let todolistcopy = [...this.state.todolist, todo];
    this.setState({ todolist: todolistcopy });
  }

  render() {
    return (
      <>
        <Nav />
        <AddToDo AddNewTodo={this.AddNewTodo} />

        {this.state.todolist.map((item, index) => {
          return (
            <div key={item.id}>
              {item.id} - {item.title}
            </div>
          )
        }
        )}

      </>
    )

  }

}

export default ToDoList;
