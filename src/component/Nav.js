import useFetch from '../hooks/useFetch';
import React from 'react';
//import React from 'react';
function Nav(){
    
const list=useFetch('list.json');

 {/*}  useEffect(()=>{
    fetch('list.json')
      .then(result => result.json())
      .then(json => {
         setLst(json);
         });
        },[]); */}
   console.log(list);

   return(
      <nav>
        <ul>
           {list.map(lst=>(
             <li key={lst.id}><a href={lst.id}>{lst.title}</a></li>
           ))}
           </ul>   
      </nav> 
      );
   
  }


  export default Nav;