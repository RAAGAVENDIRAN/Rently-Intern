import React from 'react';
import ReactDOM from 'react-dom';

function ListKey(props){  //6
  const item=props.item;   //7
  const key=props.keys;    //8
  return( 
    <li>{key} {item}</li>   //9
  )
}




function MyList(props){  //3
  const listItem = props.myvalue.map((listvalue,index)=>   //4 //10
  <ListKey keys={index} item={listvalue}/>  //5
  );
  return (                                  //11
    <div>
      <h2>Correct key Usage Example</h2>\
      <ul>{listItem}</ul>

    </div>
  );
}

const mydata=[200,1000,5000,300];                       //1
const root=ReactDOM.createRoot(document.getElementById('root')); //12
root.render(<MyList myvalue={mydata}/>);//2