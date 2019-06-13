import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardBodyComponent extends Component {
 
  render(){
    return (<div class={this.props.className}>{this.props.children}</div>);
  }

}

CardBodyComponent.prototypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

export default CardBodyComponent;