import React from 'react'

export default function Product(props){
    const id = props.id
    const url = props.url
    const name = props.name
    const price = props.price
    return(
        <div>
            <p>{props.url}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={()=> props.delete(id)}>Delete</button>
            <button onClick={() => {
                props.grabInfo(id,url, name, price)
                
                }}>Edit</button>
        </div>
    )
}