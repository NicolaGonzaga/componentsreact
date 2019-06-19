import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FormsComponent extends Component {

    state = {
        email: null,
        password: null
    };
    
    onChangeEmail = (event) => {
        this.setState({email: event.target.value});
    };

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    handleClick = () => {
        alert("Clique aqui");
    }
    

    render(){
        return (
        <form>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={this.onChangeEmail} value={this.state.email}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" onChange={this.onChangePassword}  value={this.state.password}/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">Submeter</button><br></br><br></br>
        <br></br>
        </form>
      );
    }

}

export default FormsComponent;
