import React from 'react'
import styled from 'styled-components'
import classes from './Cockpit.css'

const cockpit = (props) => {

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
    

   if(props.persons.length < 2){
       assignedClasses.push(classes.red)
   }

  


    return(
       <div className={classes.cockpit}>
        <h1 className={assignedClasses.join('')}>Hi, I'm a React App</h1>
        <StyledParagraph alt={props.persons.length < 2}>This is really working!</StyledParagraph>
        <StyledButton alt={props.showPersons} onClick={props.toggle}>
          Toggle Persons
        </StyledButton>
       </div>
    )
}

export default cockpit