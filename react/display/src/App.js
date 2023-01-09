import React, { useEffect, useState } from "react";
import axios from "axios"

const App=()=>{
  
 const[num,setNum]=useState(4)

  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then((res) => console.log(res.data));
  },[])
 return (
   <>
     <p>{num}</p>
     <br></br>
    
     <button
       onClick={() => {
         setNum(num + 1);
       }}
     >
       click me
     </button>
   </>
 );
 
}
export default App











// import React, { useState } from "react";
// import "./index.css"

// const App=() =>{
//   const [count, setCount]=useState(0)
//   const inc = () => {
//     setCount(count+1)
//   };

//   const Dec=()=>{
//     setCount(count-1)
//   };

//   return(
//   <>
//     <h1>Buttons</h1>
//     <div>{count}</div>
//     <button onClick={inc}>Increment +</button>
//     <button onClick={Dec}>Decrement -</button>
//   </>
//   )
// }

// export default App
