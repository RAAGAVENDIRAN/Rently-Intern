import React from 'react';
import ReactDOM from 'react-dom';




function Menubar(props){
  const myvalue=props.myvalue;
  const r1=myvalue.map((listvalues) =>{  //in arrow function we are mapping values one by one 
    return <li>{listvalues}</li>
  });
  return  <ul>{r1}</ul>
}



const myvalue=[1,2,3,4];
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menubar myvalue={myvalue}/>);