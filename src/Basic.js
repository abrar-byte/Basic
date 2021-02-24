import React, { Component } from 'react'

export default class Basic extends Component {

  state = {
    hero: ""
  }

  render() {
    return (
      <div>
        <h1>Choose Your Hero</h1>
        <button onClick={() => this.setState({ hero: 'a' })}>Marksman</button>
        <button onClick={() => this.setState({ hero: 'b' })}>Fighter</button>
        <button onClick={() => this.setState({ hero: 'c' })}>Assasin</button>
        <button onClick={() => this.setState({ hero: 'd' })}>Mage</button>
        <button onClick={() => this.setState({ hero: 'e' })}>Tank</button>

        {this.state.hero === 'a' && <Marksman />}
        {this.state.hero === 'b' && <Fighter />}
        {this.state.hero === 'c' && <Assasin />}
        {this.state.hero === "d" && <Mage />}
        {this.state.hero === "e" && <Tank />}


      </div>
    )
  }
}

class Marksman extends Component {
  render() {
    return (
      <div>
        <h2>Miya</h2>
      </div>
    )
  }
}

class Fighter extends Component {
  render() {
    return (
      <div>
        <h2>Badang</h2>
      </div>
    )
  }
}

class Assasin extends Component {
  render() {
    return (
      <div>
        <h2>Lancelot</h2>
      </div>
    )
  }
}

class Mage extends Component {
  render() {
    return (
      <div>
        <h2>Lunox</h2>
      </div>
    )
  }
}

class Tank extends Component {
  render() {
    return (
      <div>
        <h2>Gatot Kaca</h2>
      </div>
    )
  }
}



