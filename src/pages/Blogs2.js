import React from 'react'
import {useState,useEffect} from "react";
import axios from 'axios';


// useEffect Cleanup Method

function Blogs2() {
    const [data,setData]=useState([])

    useEffect(()=>{

        let subscribed =true

        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{ if(subscribed){
            alert("Hazır useEffect Clear")
            setData(res.data);
            console.log(data)
        }
           
        });
       return ()=>{subscribed=false} 
      

    },[])
console.log(data)
  return (
    <div>
        <ul>
            {data.map((item,i)=>{return <li key={i}>{item.title}</li>})}
        </ul>
    </div>
  )
}

export default Blogs2;