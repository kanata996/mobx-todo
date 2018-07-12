import React from 'react'
import {observer, inject} from 'mobx-react'

const TodoItem=({todo})=>(
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={()=>{todo.finished=!todo.finished}}
    />
    {todo.title}
  </li>
)

@inject('store')
@observer
class TodoList extends React.Component{
  state={
    title:''
  }

  changeTitle=e=>{
    const title=e.target.value
    this.setState({title})
  }

  submit=()=>{
    this.props.store.addTodo(this.state.title)
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.changeTitle} />
        <button onClick={this.submit}>Add</button>
        <ul>
          {this.props.store.todos.map(todo=>{
            return <TodoItem todo={todo} key={todo.id} />
          })}
        </ul>
        Tasks: {this.props.store.unfinishedTodoCount}
      </div>
    )
  }
}

export default TodoList