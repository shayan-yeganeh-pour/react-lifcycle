import React, { useEffect } from 'react'
import styled from 'styled-components'
import classes from './Cockpit.css'
import { render } from '@testing-library/react'







const Cockpit = props =>{

 useEffect(()=>{
   console.log("useEffect")

   const timer = setTimeout(()=>{
     alert("hello")
   },2000)

   return ()=>{
     clearInterval(timer)
     console.log("Cockpit.js clean up work in useEffect")
   }
 },[])


 useEffect(()=>{
   
 })
  
  const StyledParagraph = styled.p`
  text-align: center; 
  color: ${props => props.alt ? "red" : "blue"};
  font-family: cursive;
  font-size: ${props => props.alt ? "20px" : "15px"};
`


const StyledButton = styled.button`
text-align: center;
color: white;
padding: 10px;
background-color: green;
font-family: cursive;
font-size: 15px;

&:hover {
  background-color:  ${props => props.alt ? "red" : "blue" };
  color: white;

}
`


    const assignedClasses = []
    let btnClass = ''

    if(props.showPersons) {
        btnClass = classes.red
    }
    

   if(props.personsLength < 2){
       assignedClasses.push(classes.red)
   }

  


    return(
       <div className={classes.cockpit}>
        <h1 className={assignedClasses.join('')}>{props.title}</h1>
        <StyledParagraph alt={props.persons.length < 2}>This is really working!</StyledParagraph>
        <StyledButton alt={props.showPersons} onClick={props.toggle}>
          Toggle Persons
        </StyledButton>
       </div>
    )
}


export default Cockpit