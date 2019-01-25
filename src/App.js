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
      inventory: [],
      selectedToEdit : {
        id:null,
        url:null,
        name:null,
        price:null
      },
    }
    this.componentDidMount= this.componentDidMount.bind(this)
    this.grabFormData=this.grabFormData.bind(this)
  }
  
  componentDidMount(){
    axios.get('/api/inventory')
    .then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  grabFormData(id,url,name,price){
    this.setState({
      selectedToEdit: {
        id:id,
        url:url,
        name:name,
        price:price
      }
    })
  }
  render() {
    console.log(this.state.selectedToEdit)
    return (
      <div className="App">
       <Header/>
        <div className="container">
          <Dashboard 
          getData = {this.grabFormData}
          inventory={this.state.inventory}
          get = {this.componentDidMount}
          />
          <Form
          toEdit = {this.state.selectedToEdit} 
          get={this.componentDidMount}
          
          />
        </div>
      </div>
    );
  }
}

export default App;
