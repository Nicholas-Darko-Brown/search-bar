import { useState } from "react";
import "./App.css";
import Data from "./mock-data.json";

function App() {
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <input type="search" placeholder="Enter Post Title" onChange={(e) => setQuery(e.target.value)} />

      {
        Data.filter(post => {
          if(query === "") {
            return post;
          } 
          if (post.first_name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
            return post;
          }
          return false
        }).map((post, index) => (
          <div key={index} style={{border: "1px solid", width: "20rem", margin: "10px auto"}}>
            <p>{post.first_name}</p>
            <p>{post.last_name}</p>
            <p>{post.email}</p>
          </div>
        ))
      }

    </div>
  );
}

export default App;
