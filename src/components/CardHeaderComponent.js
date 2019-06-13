import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardHeaderComponent extends Component {
 
  render(){
    return (<div class={this.props.className}>{this.props.children}</div>);
  }

}

CardHeaderComponent.prototypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

export default CardHeaderComponent;