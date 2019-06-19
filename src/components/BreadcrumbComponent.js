import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BreadcrumbComponent extends Component {
    render(){
        return (
        <div>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {this.props.children}
        </ol>
        </nav>  
        </div>
        );
    }

}

BreadcrumbComponent.prototypes = {
  className: PropTypes.string,
  
}

export default BreadcrumbComponent;