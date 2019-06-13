import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PaginationComponent extends Component {
 
    handleClick = () => {
        alert("Clique aqui");
    }

    renderPrevious(){
        if(this.props.icon){
            return (<React.Fragment>
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </React.Fragment>)
        }
        
        return "Previous";
    }

    renderNext(){
        if(this.props.icon){
           return (
            <React.Fragment>
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </React.Fragment>
           )
        }

        return "Next";
    }
  render(){
        //overview pagination
        //let className = this.props.className;
       //if(this.props.activate){
          //activate 
        //  className = className + " page-item active";
       //} 
      
     //  if(this.props.disabled){
           //disabled 
       //    className = className + " page-item disabled";

      
       //}
      let pages = 100 /  this.props.pageSize

      let a = [];
      for (let i = 0; i<pages; i++) {
         a.push(<li class="page-item"><a class="page-link" href="#"  onClick={this.handleClick}>{i + 1}</a></li>);
      };

           

      return (<nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">{this.renderPrevious()}</a></li>
        {a}
        <li class="page-item"><a class="page-link" href="#">{this.renderNext()}</a></li>
      </ul>
    </nav>)
    }

}


PaginationComponent.prototypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    onChangePage:PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number,
    icon: PropTypes.bool,
}
 
PaginationComponent.defaultProps = {
    initialPage: 1,
    pageSize: 10,
    icon: true
};

export default PaginationComponent;