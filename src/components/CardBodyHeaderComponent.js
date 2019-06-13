import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardBodyHeaderComponent extends Component {
 
  render(){
    return (<div class={this.props.className}>{this.props.children}</div>);
  }

}

CardBodyHeaderComponent.prototypes = {
  className: PropTypes.string,
  id: PropTypes.string
}

export default CardBodyHeaderComponent;