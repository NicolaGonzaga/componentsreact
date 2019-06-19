import React, { Component } from 'react';

class CarouselComponent extends Component {

    renderCrossfade() {
      if (this.props.crossfade) {
        return (
            <div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          );
        }

        return null;
    }

    renderIndicators() {
      if (this.props.indicators) {
        return (
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
        );
    }
    return null;
}

    render () {
        return (
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              {this.renderIndicators()}
              <div className="carousel-inner">{this.props.children}</div>
              {this.renderCrossfade()}
            </div>
        )

    }
    
    
}


export default CarouselComponent;