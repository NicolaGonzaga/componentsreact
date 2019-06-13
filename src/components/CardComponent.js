import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardComponent extends Component {
 
  render(){
    return (<div class={this.props.className}>{this.props.children}</div>);
  }

}

CardComponent.prototypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

export default CardComponent;