import React from 'react';
import ReactDOM from 'react-dom';


class Reactform extends React.Component{
  constructor(){
    super();
    this.state={username:"",
                age:null,
                errmsg:""};
  }


  uservalue=(event)=>{ //event is passed as arguement. automatically captures what the event given. here it is onchange
    let n=event.target.name;  // what name they have selected eg:username or age
    let v=event.target.value; // the respective values are here.
    let err="";
    if (n==="age"){
      if(v!="" && !Number(v)){
        err=<strong>Invalid value, Your age must be a Number</strong>
      }
    }
    this.setState({errmsg:err}); //event.target targets the value given in field
    this.setState({[n]:v});

  }   //can use same function for multiple input tags.



  formSubmit=(event)=>{
    event.preventDefault();  // preventDefault: in alert msg the entered values eill be shown, to check it is useful
    alert("Your Name: "+ this.state.username);
    
  }

  render(){
    return(
     <form onSubmit={this.formSubmit}>
      <h1>Hello {this.state.username}</h1>
      <h1>Your age {this.state.age}</h1>
      Enter Your Name: <input type="text" name="username" onChange={this.uservalue}/><br/>
      Enter Your Age: <input type="text" name="age" onChange={this.uservalue}/>   {this.state.errmsg}
      <input type="submit"/>
     </form>
    )
  }
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Reactform/>);