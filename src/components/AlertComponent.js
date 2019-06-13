import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlertComponent extends Component {
 
    render(){
      return (<div class={this.props.variavel} role="alert">{this.props.children}</div>);
    }

}

AlertComponent.prototypes = {
    variavel: PropTypes.string
  }

  AlertComponent.defaultProps = {
    variavel: 'alert alert-dark'
  };

export default AlertComponent;