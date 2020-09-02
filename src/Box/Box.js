import React from "react"
import './Box.css'
import styled from "styled-components"


const box = props => {
    
    const Button = styled.button`
       background-color: tomato;
       color: white;
       padding: 5px;
       cursor: pointer;
      

       $:hover {
         
           padding : 10px;
           background-color: black;
       }
    `


    


   return(
       <div>
           <Button type={props.print} className="btn btn-primary">Print</Button>
       </div>
   )
}

export default box