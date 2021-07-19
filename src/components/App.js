import "./App.css"
import React from "react"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {light: true, value: 'light' }
  }

  componentDidMount(){
    let mode = sessionStorage.getItem('mode') 
    if(mode === 'light'){
      this.setState({light: true, value: mode})
    }else if(mode === 'dark'){
      this.setState({light: false, value: mode})
    }else{
      sessionStorage.setItem('mode', 'light')
    }
  }

  changeColor = () => {
    if(this.state.light){
      this.setState({light: false, value: 'dark'})
      sessionStorage.setItem('mode', 'dark')
    }
    else{
      this.setState({light: true, value: 'light'})
      sessionStorage.setItem('mode', 'light')
    }
  }

  render(){
    return(
      <div className={`container container-bg-${this.state.value}`}>
        <h1>Olá {this.props.nome}</h1>
        <Lista />
        {/* <Formulario /> */}
        <button type="button" className={`change-color-button bg-${this.state.value}`} onClick={this.changeColor}>Modo {this.state.value === 'light' ? 'dark' : 'light'} </button>
      </div>
    )
  }
};

class Lista extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      itens: [
        {id: 0, text: 'Tarefa 0', feito: true},
        {id: 1, text: 'Tarefa 1', feito: true},
        {id: 2, text: 'Tarefa 2', feito: false},
        {id: 3, text: 'Tarefa 3', feito: true},
        {id: 4, text: 'Tarefa 4', feito: false},
      ]
    }
  }

  render(){
    return(
      <>
        <ul>
          {this.state.itens.map((item) => (
            <Item key={item.id} feito={item.feito}>
              {item.text}
            </Item>
          ))}
        </ul>
      </>
    )
  }
}

class Item extends React.Component{
  /*constructor(props){
    super(props);
  }*/

  render(){
    const textDecoration = this.props.feito ? 'line-through' : 'none';
    return(
      <>
        <li style={{textDecoration}}>{this.props.children}</li>
      </>
    )
  }
}

/*class Formulario extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(null)
  }
}*/

export default App;
