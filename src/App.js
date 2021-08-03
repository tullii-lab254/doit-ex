
import Nav from './component/Nav';
import React from 'react';

function Article(props){


  return(
     <article>
        <h2>{props.title}</h2>
          {props.desc}
      </article>
  );
     
}


function App() {
  
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav />
      <Article title={'Welcome'} desc={"Hello React & Ajax"} />
    </div>
  );
}

export default App;
