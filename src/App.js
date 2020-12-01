import React from "react";
import bankOne from "./drumData/BankOne"
import bankTwo from "./drumData/BankTwo";
import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      drumpads1: bankOne,
      drumpads2:bankTwo,
      bitsName: "Bit Name",
      powerChecked: false,
      //bank: one,
      bankChecked: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    console.log(event.target.id);
    this.setState({
      bitsName: event.target.id
    })
    let audio = new Audio(event.target.childNodes[1].src);
    audio.play();
  }
  handleChange(event){
        console.log(!event.target.checked);
  }

  render(){
    return (
      <div id="drum-machine">
            <div className="App-title">
              <h1 className="title">Drum Machine</h1>
            </div>
            <section className="main">
              <div id="display-drum">
              {this.state.drumpads1.map(obj => {
                  return (<div className="drum-pad" id={obj.id} key={obj.id} onClick={this.handleClick}>
                              {obj.keyTrigger}
                              <audio className="clip" id={obj.keyTrigger} src={obj.url}></audio>
                        </div>
                        )
                })}
              </div>
              <div id="accsessory">
                  <div className="bitsName">
                    <h1>{this.state.bitsName}</h1>
                  </div>
              </div>
            </section>
      </div>
    )
  }
}

export default App;
