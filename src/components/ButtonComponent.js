import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ButtonComponent extends Component {
 
  render(){
    return (<button type="button" class={this.props.className} onClick={this.props.onClick}>{this.props.children}</button>);
  }

}

ButtonComponent.prototypes = {
  className: PropTypes.string
}

export default ButtonComponent;