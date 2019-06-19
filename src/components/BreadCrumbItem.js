import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BreadCrumbItem extends Component{

    render(){
        return (<div class={this.props.className}>{this.props.children}</div>);
    }
}

BreadCrumbItem.prototypes = {
    className: PropTypes.string
}

BreadCrumbItem.defaultProps = {
    className: "breadcrumb-item"
}

export default BreadCrumbItem;