// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{
  focuses = () => console.log('Good!')

  blurs = () => console.log('Hey! Eyes on me!')

  render(){
    return (
      <button onFocus={this.focuses} onBlur={this.blurs}> </button>
    )
  }
}

export default EyesOnMe;
