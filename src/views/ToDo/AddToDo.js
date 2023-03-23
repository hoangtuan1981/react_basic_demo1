import React from 'react';
//import './App.css';

class AddToDo extends React.Component{
    state = {
      todo: {
        id: 0,
        title: ""
      }
    };

  SetOnchangeTitle = (event) => {

    let editTodoCopy = { ...this.state.todo };
        editTodoCopy.title = event.target.value;
        this.setState({
          todo: editTodoCopy
        })
  }

  AddToDoIntoList = () =>{
    //console.log("add todo here");
    if(!this.state.todo.title)
      return;
    let todocopy = { ...this.state.todo };
    todocopy.id = Math.floor(Math.random() * 10000);
    this.props.AddNewTodo(todocopy);

    this.setState({todo: {id: 0, title:''}});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.todo.title} onChange={(event) => this.SetOnchangeTitle(event)} >
        </input> 
        <button  type="button" className="add" onClick={this.AddToDoIntoList}>Add</button>
      </div>
    )
    
  }


}

export default AddToDo;
