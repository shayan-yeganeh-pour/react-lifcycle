import React, { Component } from 'react';
import styled from 'styled-components'


class Person extends Component {


render() {

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
      <StyledH>Hello world</StyledH>
      <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
    </StyledDiv>
  );
};

}

export default Person
