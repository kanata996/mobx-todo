import React from 'react'
import {Provider} from 'mobx-react'
import TodoList from './TodoList'
import store from './store'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}

export default App