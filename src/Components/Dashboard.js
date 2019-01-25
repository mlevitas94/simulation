import React, { Component } from 'react';
import Product from './Product'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state={

        }
        this.deleteItem=this.deleteItem.bind(this)
    }

    deleteItem(id){
        axios.delete(`api/product/:${id}`)
        .then(res =>{
            this.props.get()
        })
    }

  render() {
   let allItems = this.props.inventory.map((item, i) => {
       return(
        <Product 
        key={i}
        id={item.id}
        url={item.url}
        name={item.name}
        price={item.price}
        delete={this.deleteItem}
        />
       )
   })
    
    return (
      <div className="App">
        {allItems}
      </div>
    );
  }
}

export default Dashboard;
