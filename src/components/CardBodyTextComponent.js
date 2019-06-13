import PropTypes from 'prop-types';
import React, { Component } from 'react';


class CardBodyTextComponent extends Component {
 
  render(){
    return (<div class={this.props.className}>{this.props.children}</div>);
  }
}

CardBodyTextComponent.prototypes = {
  className: PropTypes.string,
  id: PropTypes.string
};
  

export default CardBodyTextComponent;