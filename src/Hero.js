import React, { Component } from 'react'

export default class Hero extends Component {
  state = {
    hasil: "",

  }

  componentDidUpdate() {
    if (this.state.hasil === "") {
      this.setState({ hasil: <Miya /> })
      console.log('beerjs')

    }
  }
  marksman = () => {
    this.setState({ hasil: "" })
  }
  assasin = () => this.setState({ hasil: <Ling /> })
  fighter = () => this.setState({ hasil: <Balmond /> })
  mage = () => this.setState({ hasil: <Pharsa /> })
  tank = () => this.setState({ hasil: <Atlas /> })



  render() {
    return (
      <div>
        <button onClick={() => this.marksman()}>Marksman</button>
        <button onClick={() => this.assasin()}>Assasin</button>
        <button onClick={() => this.fighter()}>Fighter</button>
        <button onClick={() => this.mage()}>Mage</button>
        <button onClick={() => this.tank()}>Tank</button>
        {this.state.hasil}

        {/* <div>
          {this.state.hasil === 'a' && <Miya />}
        </div> */}




      </div>
    )
  }
}

class Miya extends Component {

  render() {
    return (
      <div>
        <h1>Miya</h1>
      </div>
    )
  }
}

class Ling extends Component {

  render() {
    return (
      <div>
        <h1>Ling</h1>
      </div>
    )
  }
}

class Balmond extends Component {

  render() {
    return (
      <div>
        <h1>Balmond</h1>
      </div>
    )
  }
}

class Pharsa extends Component {

  render() {
    return (
      <div>
        <h1>Pharsa</h1>
      </div>
    )
  }
}

class Atlas extends Component {

  render() {
    return (
      <div>
        <h1>Atlas</h1>
      </div>
    )
  }
}