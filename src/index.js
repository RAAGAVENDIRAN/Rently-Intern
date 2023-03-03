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

    render(){
         return <h1>{this.state.value} {this.state.name}</h1>
    }

    componentDidMount(){
      setTimeout(()=>{
        this.setState({value:"ThankYou"})},5000)
       
    }


}
    


    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LifeCycle/>);