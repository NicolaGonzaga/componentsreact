import React from 'react';
import AlertComponent from './components/AlertComponent';
import BadgeComponent from './components/BadgeComponent';
import ButtonComponent from './components/ButtonComponent';
import CardBodyComponent from './components/CardBodyComponent';
import CardBodyHeaderComponent from './components/CardBodyHeaderComponent';
import CardBodyTextComponent from './components/CardBodyTextComponent';
import CardComponent from './components/CardComponent';
import CardFooterComponent from './components/CardFooterComponent';
import CardHeaderComponent from './components/CardHeaderComponent';
import ProgressComponent from './components/ProgressComponent';
import PaginationComponent from './components/PaginationComponent';
import FormsComponent from './components/FormsComponent';


class App extends React.Component {

  state = {
    progress: 0,
    progress2: 0
  }
  
  componentDidMount(){
    setInterval(this.timer, 100); 
    setInterval(this.timer2, 400); 
  }

  timer = () =>  {
    let newValue = 0;
    if(this.state.progress !== 100){
      newValue = this.state.progress + 1
    }

    this.setState({
      progress: newValue
    })
  }

  timer2 = () =>  {
    let newValue = 0;
    if(this.state.progress !== 100){
      newValue = this.state.progress2 + 1
    }

    this.setState({
      progress2: newValue
    })
  }

  onClickMedium = () => {
    alert("Cliquei");
  }

  render(){
    return (<React.Fragment>
      <ButtonComponent className="btn btn-success">Botão</ButtonComponent>
    <AlertComponent variavel="alert alert-danger"><b>Alert</b></AlertComponent>
    <ProgressComponent className="progress-bar" progress={this.state.progress}> {this.state.progress}</ProgressComponent>
    <ProgressComponent striped progress={this.state.progress2}> {this.state.progress2}</ProgressComponent>
    <ProgressComponent animeted striped className="progress-bar bg-danger" progress={this.state.progress2}> {this.state.progress2}</ProgressComponent>
    <BadgeComponent className="badge badge-info">Teste</BadgeComponent>
    <CardComponent className="card text-center">
      <CardHeaderComponent className="card-header">Special title treatment</CardHeaderComponent>
      <CardBodyComponent className="card-body">
          <CardBodyHeaderComponent className="card-title">Text below</CardBodyHeaderComponent>
          <CardBodyTextComponent className="card-text"> 
          <br></br>
            <ButtonComponent className="btn btn-primary" onClick={this.onClickNoob}>Joao</ButtonComponent>
          </CardBodyTextComponent>
     </CardBodyComponent>
    <CardFooterComponent className="card-footer text-muted">2 days ago</CardFooterComponent>
    </CardComponent>
    <PaginationComponent></PaginationComponent>
    <FormsComponent></FormsComponent></React.Fragment>
    )
  }
};

export default App;