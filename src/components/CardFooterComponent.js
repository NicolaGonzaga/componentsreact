import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardFooterComponent extends Component {
 
  render(){
    return (<div class={this.props.className}>{this.props.children}</div>);
  }

}

CardFooterComponent.prototypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

export default CardFooterComponent;