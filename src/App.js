import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos:[
/*  npm i axios
    todos:[]
    }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => console.log(res.data))
    } */
    {
      id:uuid.v4(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id:uuid.v4(),
      title: 'Dinner with wife',
      completed: true
    },
    {
      id:uuid.v4(),
      title: 'Meeting with boss',
      completed: false
    }
    ]
  }

  markComplete=(id) =>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
}
delTodo= (id) =>{
  this.setState({ todos: [...this.state.todos.filter(todo =>todo.id !== id) ]});
}
addTodo=(title) =>{
  const newTodo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}
  render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route path="/" render={prop =>(
          <React.Fragment>
             <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About} />
        </div>
        </div>
        </Router>
  );
  }
}

export default App;
