import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Header from './Components/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: []
    }
    this.componentDidMount= this.componentDidMount.bind(this)
  }
  
  componentDidMount(){
    axios.get('/api/inventory')
    .then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }
  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
       <Header/>
        <div className="container">
          <Dashboard 
          inventory={this.state.inventory}
          get = {this.componentDidMount}
          />
          <Form 
          get={this.componentDidMount}
          
          />
        </div>
      </div>
    );
  }
}

export default App;
