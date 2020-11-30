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
      bitsName: ""
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
  render(){
    return (
      <div id="drum-machine">
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
            <div>
              <label for="power" className="switch">Power</label>
              <input type="checkbox" id="power" onChange={this.handleChange}/>
              <span class="slider round"></span>
            </div>
            <div className="bitsName">
              <h1>{this.state.bitsName}</h1>
            </div>
            <div>
              <label for="bank" className="switch">Bank</label>
              <input type="checkbox" id="bank"/>
              <span class="slider round"></span>
            </div>
            </div>
      </div>
    )
  }
}

export default App;
