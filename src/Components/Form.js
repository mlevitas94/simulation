import React, { Component } from 'react';
import Axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            url:'',
            productName: '',
            price: ''
        }
    }
    updateUrl(val){
        this.setState({
            url:val
        })
    }

    updateProductName(val){
        this.setState({
            productName:val
        })
    }

    updatePrice(val){
        this.setState({
            price: val
        })
    }

    resetInputs(){
        this.setState({
            url: '',
            productName: '',
            price:''
        })
    }

    addProduct(urlInput, nameInput, priceInput){
        const newProduct = {
            url: urlInput,
            name: nameInput,
            price: priceInput
        }

        Axios.post('/api/product', newProduct)
        .then(res => {
            this.props.get()
        })
    }
  render() {
    return (
      <div className="App">
        <p>Image URL:</p>

        <input onChange={(e) => this.updateUrl(e.target.value)} value={this.state.url}/>

        <br/>

        <p>Product Name:</p>

        <input onChange={(e) => this.updateProductName(e.target.value)} value={this.state.productName}/>

        <br/>

        <p>Price:</p>

        <input  onChange={(e) => this.updatePrice(e.target.value)} value={this.state.price}/>

        <br/>

        <button onClick={() => this.resetInputs()}>cancel</button>

        <button onClick={() => this.addProduct(this.state.url, this.state.productName, this.state.price)}>Add to Inventory</button>

      </div>
    );
  }
}

export default Form;
