import React from 'react';
import ReactDOM from 'react-dom';




function Menubar(props){
  const content=props.data.map((show)=>
  <div key={show.id}>
    <h3>{show.id} :{show.title} :{show.content}</h3>
  </div>);
return(
  <div>{content}</div>
);
}



const myvalue=[
  {id:1,title:"First",content:"Welcome to VJ Techno"},
  {id:2,title:"Second",content:"learn all programming language"}
];
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menubar data={myvalue}/>);