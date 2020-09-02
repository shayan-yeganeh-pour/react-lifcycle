import React from 'react';
import styled from 'styled-components'


const person = props => {
  console.log("[App.js] rendering...")
  const StyledDiv = styled.div`
    width: 500px;
    display:block;
    box-shadow: -5px 10px 10px grey;
    padding: 20px;
    margin: 10px auto;
    transition: .4s ease-in-out;

    @media(min-width: 1000px){
      display:inline-block;
      width: 300px
    }

   }
  
  ` 
  const StyledH = styled.h2`
    color: green;
  
  `
  return (
    <StyledDiv>
      <StyledH>hello world</StyledH>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person
