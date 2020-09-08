import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import classes from './Cockpit.css'
import { render } from '@testing-library/react'







const Cockpit = props =>{

  const toggleBtnRef = useRef(null)

 useEffect(()=>{
   console.log("[Cockpit.js] useEffect")
   toggleBtnRef.current.click()
  //  const timer = setTimeout(()=>{
  //    alert("hello")
  //  },1000)

   return ()=>{
     //clearInterval(timer)
     console.log("[Cockpit.js] clean up work in useEffect")
   }
 },[])


 useEffect(()=>{
   console.log("[Cockpit.js]clean up work in 2nd useEffect");
   return ()=> {
     console.log("[Cockpit.js]2nd useEffect")
   }
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
transition: .5s ease-in-out;

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
       <div className="Cockpit">
        <h1 className={assignedClasses.join('')}>{props.title}</h1>
        <StyledParagraph alt={props.personsLength < 2}>This is really working!</StyledParagraph>
        <StyledButton ref={toggleBtnRef} alt={props.showPersons} onClick={props.toggle}>
          Toggle Persons
        </StyledButton>
        <button id="b1" onClick={props.authentication}>Login</button>
       </div>
    )
}


export default React.memo(Cockpit)