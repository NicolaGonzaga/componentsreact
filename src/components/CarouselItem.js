import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselItem extends Component{
      
    
      renderDescriptionItem() {
        if (this.props.title || this.props.description) {
          
          let title = null;
          if (this.props.title) {
            title = <h5>{this.props.title}</h5>;
          }
    
          let description = null;
          if (this.props.description) {
            description = <p>{this.props.description}</p>;
          }
    
          return(
            <div className="carousel-caption d-none d-md-block">
                {title}
                {description}
            </div>
          )
        }
    
        return null;
      }
      render() {
        let className = "carousel-item";
    
        if (this.props.active) {
          className += " active";
        }
    
        return (
          <div className={className}>
            <img
              src={this.props.src}
              className="d-block w-100"
              alt={this.props.alt}
            />
            {this.renderDescriptionItem()}
          </div>
        );
      }
    }

    export default CarouselItem;
  

