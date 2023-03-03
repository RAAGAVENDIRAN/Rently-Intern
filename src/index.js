import React from 'react';
import ReactDOM from 'react-dom';




  class ReactState extends React.Component{
    constructor() { //state can be  initialized only in constructor.
        super();   //super keyword is used to initize values and that values can be called in other methods.
        this.state={initialvalue:"Welcome",name:"Guys"}   //creating state

    }

    changevalue=()=>  { //arrow function
          this.setState({initialvalue:"Thanks for changing"})
    }
    render() {  // render method is to display in webpage
    
            return <div>
                  <h1>{this.state.initialvalue } {this.state.name}</h1>
                  <button type="button" onClick={this.changevalue}> ChangeValue</button>
            </div> 
    
    }
    }


    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<ReactState/>);