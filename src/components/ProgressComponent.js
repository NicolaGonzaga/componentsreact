import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressComponent extends Component {
 
    render(){
        //progress-bar bg-danger
        let className = this.props.className;
       if(this.props.striped){
          //progress-bar-striped 
          className = className + " progress-bar-striped";
       } 
      
       if(this.props.animated){
           //progress-bar-animated 
           className = className + " progress-bar-animated";

       }
      
      return (<div class="progress">
      <div class={className} role="progressbar" style={{width: this.props.progress+"%"}} aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100"></div>
      {this.props.children}
      </div>);
    }

}

ProgressComponent.prototypes = {
    className: PropTypes.string,
    progress: PropTypes.string,
    striped: PropTypes.bool,
    animated: PropTypes.bool
}

ProgressComponent.defaultProps = {
    className: 'progress-bar bg-warning',
    progress: '0',
    striped: false,
    animated: false
};

export default ProgressComponent;