import React from 'react'

export default function Product(props){
    const id = props.id
    return(
        <div>
            <p>{props.url}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={()=> props.delete(id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}