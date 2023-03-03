import React from 'react';
import ReactDOM from 'react-dom';


class Eventbind extends React.Component{
  constructor(){
    super()
    this.state={
      msg:"welcome"
    }
  }

  clickEvent=(a)=>{
    this.setState({
      msg:a
    })
  }

  render(){
    return (<div>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>this.clickEvent("Hello World ")}>Click</button>
    </div>
    )
  }
}



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Eventbind/>);