import React, { Component } from 'react';

class Forms2Component extends Component {

    state = {
        nome:null,
        datanascimento:null,
        telefone: null,
        email: null,
        password: null
    };
    
    onChangeNome = (event) => {
        this.setState({nome: event.target.value});
    };

    onChangeDataNascimento = (event) => {
        //this.setState({datanascimento: event.target.value});
    };

    onChangeTelefone = (event) => {
        this.setState({telefone: event.target.value});
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
          <label for="exampleInputName">Nome</label>
          <input type="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Nome" onChange={this.onChangeNome} value={this.state.nome}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="exampleInputDataNascimento">Data de nascimento</label>
          <input type="date" class="form-control" id="exampleInputDate" placeholder="Data de nascimento" onChange={this.onChangeDataNascimento} value={this.state.datanascimento} />
        </div>
        <div class="form-group">
        <label for="exampleInputTelefone">Telefone</label>
          <input type="number" class="form-control" id="exampleInputTelefone" placeholder="Telefone" onChange={this.onChangeTelefone} value={this.state.telefone} />
        </div>
        <div class="form-group">
        <label for="exampleInputDataNascimento">E-mail</label>
          <input type="email" class="form-control" id="exampleInputEmail" placeholder="E-mail" onChange={this.onChangeEmail} value={this.state.email} />
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
        </form>
      );
    }

}

export default Forms2Component;
