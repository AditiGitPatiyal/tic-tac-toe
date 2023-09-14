import React from 'react'

const Square = (props) =>{
    return(
        <div 
            onClick={props.onClick}
            style={{
            border:"1px solid #00968894",
            height:"100px",
            width:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderCollapse: "collapse"

        }}
        className='square'
        >
         <h3>{props.value}</h3>
        </div>
    )
}
export default Square