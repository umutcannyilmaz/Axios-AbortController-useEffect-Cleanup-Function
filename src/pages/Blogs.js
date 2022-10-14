import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";

// AXIOS AbortController
// veri sızıntısını önlemek için kullanıyoruz...

function Blogs() {
    const [data,setData]=useState([])

    useEffect(()=>{

        const controller = new AbortController();

        axios.get('https://jsonplaceholder.typicode.com/todos', {
           signal: controller.signal
        }).then(function(response) {
            alert("Hazır Axios AbortController")
         setData(response.data);
         console.log(data)
        }).catch((err)=>{console.log(err)})
        // cancel the request
      
        return ()=>{
            controller.abort()
            
        }   

    },[])
console.log(data)
  return (
    data && <div>
        <ul>
            {data.map((item,i)=>{return <li key={i}>{item.title}</li>})}
        </ul>
    </div>
  )
}

export default Blogs;