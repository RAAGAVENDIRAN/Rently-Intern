import React from 'react';
import ReactDOM from 'react-dom';




  class LifeCycle extends React.Component{
    constructor() { //state can be  initialized only in constructor.
        super();   //super keyword is used to initize values and that values can be called in other methods.
        this.state={value:"Welcome",name:"Guys"}   //creating state

    }

    componentWillMount(){  // comes before render.comes only on first time page is rendered
      alert("Leran ReactJs Lifecyle");
    }

    changevalue = () =>{
          this.setState({value:"Modified Value"})  //updating new Value
    }


    deleteheader=()=>{
      this.setState({value:false,name:false})
    }
    render(){
         return <div>
          <h1>{this.state.value} {this.state.name}</h1>
          <br/>
          <button type="button" onClick={this.changevalue}>ChangeValue</button>
          <button type="button" onClick={this.deleteheader}>Deleteheader</button>
          </div>
    }

    componentDidMount(){  // works after rendering
      setTimeout(()=>{
        this.setState({value:"ThankYou"})},5000)
       
    }

    componentWillUpdate(){  //invoked whaenever a new update of value is there.
      alert("Do you want update a new Value");
    }

    componentDidUpdate(){  // invoked if componentWillUpdate is invokes
      document.getElementById("mydiv").innerHTML="New value updated successfully "+this.state.value;
    }
    
    shouldComponentUpdate(){
      return true;    //if given false no updats will be carrried out.
    }

    componentWillUnmount(){  //to delete
          alert("Header");
    }



}
    


    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LifeCycle/>);