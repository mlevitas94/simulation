import React, { Component } from 'react';
import Axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            url:'',
            productName: '',
            price: '',
            id: null,
            changeButton: false
        }
        this.switchButtons=this.switchButtons.bind(this)
    }
    componentDidUpdate(old){
        if(JSON.stringify(old.toEdit) !== JSON.stringify(this.props.toEdit)){
            this.setState({
                id:this.props.toEdit.id,
                url: this.props.toEdit.url,
                productName: this.props.toEdit.name,
                price: this.props.toEdit.price
            })
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

    switchButtons(){
       if(this.state.changeButton === true){
           this.setState({
               changeButton:false
           })
       }else {
           this.setState({
               changeButton:true
           })
       }
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

        <div>
            <button style={{display: this.state.changeButton ? 'none' : 'inline-block'}} onClick={() => {
                this.addProduct(this.state.url, this.state.productName, this.state.price);
                this.switchButtons()
                }}>Add to Inventory</button>
            <button style={{display: this.state.changeButton ? 'inline-block' : 'none'}}
                onClick={() => {
                    this.switchButtons();
                    this.resetInputs();
                 }}
            
            >Save changes</button>


        </div>

      </div>
    );
  }
}

export default Form;
