import React, { Component } from "react";
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Start'
    };
    
    this.timer = null;
    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start() {
    let state = this.state;

    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Start';

    } else {
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state)
      },100);
      state.botao = 'Pause';
    }
    this.setState(state);
  }

  clean() {
    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } 

    let state = this.state;
    state.numero = 0;
    state.botao = 'Start';
    this.setState(state);
  }

  
  render() {
    return (
      <div className="container">
        <h1>Stopwatch...</h1>
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.start}>{this.state.botao}</a>
          <a className="botao" onClick={this.clean}>Clean</a>

        </div>
      </div>
    )
  }
}

export default App;