import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import Aux from '../../../hoc/Auxilliary'
import PropTypes from 'prop-types'
import './Person.css'

class Person extends Component {
    
  constructor(props){
    super(props)
    this.inputElement = React.createRef()
  }

 componentDidMount(){
   this.inputElement.current.focus()
 }




render() {

  console.log("[App.js] rendering...")
  // const StyledDiv = styled.div`
  //   width: 500px;
  //   display:block;
  //   box-shadow: -5px 10px 10px grey;
  //   padding: 20px;
  //   margin: 10px auto;
  //   transition: .4s ease-in-out;

  //   @media(min-width: 1000px){
  //     display:inline-block;
  //     width: 300px
  //   }

  //  }
  
  // ` 
  // const StyledH = styled.h2`
  //   color: green;
  
  // `

  var input = document.querySelector("input")

  
  return (
    <div className="Person">
      {this.props.authentication ? <p>Authenticated!</p> : <p>Login first</p>}
      <h2 key="i1">Cards</h2>
      <p key="i2" onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p key="i3">{this.props.children}</p>
      <input ref={this.inputElement} id="i4" type="text" onChange={this.props.changed} value={this.props.name} />
    </div>
  );
};

}


Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  authentication: PropTypes.bool
}

export default Person
