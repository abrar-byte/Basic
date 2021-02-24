import React, { Component } from 'react'

export default class Calc extends Component {
  state = {
    hasil: ""
  }

  // klik = (tombol) => {
  //   if (tombol === "=") {
  //     this.kodehitung()
  //   }
  //   else {
  //     this.setState({
  //       hasil: this.state.hasil + tombol
  //     })
  //   }
  // };

  //   else {
  // cekhasil = this.state.hasil

  // ftambah = () => {
  //   this.setState({ tambah: "+1" })
  // }

  // fkurang = () => {
  //   this.setState({ kurang: "-1" })
  // }

  // fkali = (par3) => {
  //   this.setState({ kali: "*1" })
  // }

  // fbagi = (par4) => {
  //   this.setState({ bagi: ":1" })
  // }
  // }
  render() {
    return (
      <div>

        <h1>Choose Your Hero</h1>
        {/* <button onClick={() => this.setState({ op: 'Miya' })}>Marksman</button>
      <button onClick={() => this.setState({ op: 'Estes' })}>Mage</button>
      <button onClick={() => this.setState({ op: 'Roger' })}>Fighter</button>
      <button onClick={() => this.setState({ op: 'Tigreal' })}>Tank</button>



      {this.state.op === 'Miya' && <Miya klik={this.klik} />}
      {this.state.op === 'Estes' && <Estes klik={this.klik} />}
      {this.state.op === 'Roger' && <Roger klik={this.klik} />}
      {this.state.op === 'Tigreal' && <Tigreal klik={this.klik} />} */}



      </div>
    )
  }


class Miya extends Component {
  render() {
    return (
      <div>
        Miya



      </div>
    )
  }
}

class Estes extends Component {
  render() {
    return (
      <div>
        Estes

      </div>
    )
  }
}

class Roger extends Component {
  render() {
    return (
      <div>
        Roger

      </div>
    )
  }
}

class Tigreal extends Component {
  render() {
    return (
      <div>
        Tigreal

      </div>
    )
  }
}


