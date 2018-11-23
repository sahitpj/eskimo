import '../assets/css/App.css'
import React, { Component } from 'react'
// import '../assets/css/bootstrap.css'
// import '../assets/css/bootstrap.min.css'
// import '../assets/js/bootstrap'
import { data } from '../../main'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
        <Table completeinfo={data}/>
      </div>
    )
  }
}


class ProcessRow extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.information.map(function(name, index){
                    return <div className="col-md-2">{name}</div>;
              })}
      </div>
    )
  }
}


class Table extends React.Component {
  render () {
    return (
      <div className="container">
        {this.props.completeinfo.map(function(name, index){
                    return <ProcessRow information={name} />
              })}
      </div>
    )
  }
}





export default App