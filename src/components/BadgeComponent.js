import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BadgeComponent extends Component {
 
    render(){
      return (<span class={this.props.className}>{this.props.children}</span>);
    }

}

BadgeComponent.prototypes = {
    className: PropTypes.string

}
    BadgeComponent.defaultProps = {
        className: 'badge badge-danger',

};
       

export default BadgeComponent;