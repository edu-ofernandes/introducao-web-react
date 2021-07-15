import "./App.css"
import React from "react"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {light: true, value: 'light' }
  }

  changeColor = () => {
    this.state.light ? this.setState({light: false, value: 'dark'}) : this.setState({light: true, value: 'light'})
  }

  render(){
    return(
      <>
        <h1>Olá {this.props.nome}</h1>
        <h1>Olá {this.props.children}</h1>
        <button type="button" className={`bg-${this.state.value}`} onClick={this.changeColor}>Modo {this.state.value === 'light' ? 'dark' : 'light'} </button>
      </>
    )
  }
};
