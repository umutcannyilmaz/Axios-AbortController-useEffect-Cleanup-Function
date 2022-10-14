import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = ()=>{

  
return(
    <div>
      <nav>
        <ul> 
          <li>
            <Link to="/blogs1">Blogs1</Link>
          </li>
          <li>
            <Link to="/blogs2">Blogs2</Link>
          </li>
        </ul>
      </nav>
    </div>
)

}



export default Data;
