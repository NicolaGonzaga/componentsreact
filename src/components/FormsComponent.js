import React, { Component } from 'react';
import { __asyncValues } from 'tslib';

class FormsComponent extends Component {

    handleInputChange (event) {
        const email = target.name;
        const password = targer.name;

        this.state({
            [email]:email
        });
    }

    render(){
        return (
        <form>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value=""onChange={this.handleInputChange}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" value="" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Vai</button>
        </form>
      );
    }

}

export default FormsComponent;
