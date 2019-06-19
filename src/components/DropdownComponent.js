import React, { Component } from 'react';

class DropdownComponent extends Component {
    render(){
        return (
            <div class="btn-group dropup">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Clicar
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        );
    }
    
}

export default DropdownComponent;