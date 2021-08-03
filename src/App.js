
import Nav from './component/Nav';
import React, { useState } from 'react';
import useFetch from './hooks/useFetch';

function Article(props){


  return(
     <article>
        <h2>{props.title}</h2>
          {props.desc}
      </article>
  );
     
}


function App() {
  const [title, setTitle]= useState("Welcome");
  const [desc, setDesc]=useState("Hello React & Ajax")
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav onClick={(id)=>{
        fetch(id+'.json')
         .then(res =>{
          return res.json();
        })
         .then(data=>{
          setTitle(data.title);
          setDesc(data.desc);
         });
        
      }}/>
      <Article title={title} desc={desc} />
    </div>
  );
}

export default App;
