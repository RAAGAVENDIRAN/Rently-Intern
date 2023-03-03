import React from 'react';
import ReactDOM from 'react-dom';




function Menubar(){
  const newlist=[1,2,3,4,5]
  const r1=newlist.map((listvalues) =>{  //in arrow function we are mapping values one by one 
    return <li>{listvalues}</li>
  });
  return  <ul>{r1}</ul>
}




const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menubar newlist/>);