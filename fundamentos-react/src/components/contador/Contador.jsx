import React from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'
import Button from './Botoes'

export default class Contador extends React.Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0
  }

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }

  mudarPasso = novoPasso => {
    this.setState({
      passo: novoPasso
    })
  }
  render() {
    return (
      <div className="Contador">
        <h2>Contador </h2>
        <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso} />
        <Display valor={this.state.valor} />
        <div>
          <Button onInc={this.inc} onDec={this.dec} />
        </div>
      </div>
    )
  }
}
