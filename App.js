import React from 'react';
import Prog from './Prog';
import Counter from './Counter';
import Digitalclock from './Digitalclock';
import UseState from './UseState';
import UseEffect from './UseEffect';
import BlogContextDemo from './BlogContextDemo';
import App1 from './App.css';
const bloginfo={
  React:{
    post:"Learn the UseContext Hooks",
    author:"Hemanth.B"
  },
  NodeJS:{
    post:"Node Commands",
    author:"Saai.B"
  }
}

export const BlogContext=React.createContext(bloginfo);

function App(){
  return(
  <div className="App">
  <div className="App1"><Prog /></div>  
  <div className="App2"><counter/></div>
  <div className="App3"><Digitalclock/></div>
  <div className="App4"> <UseState/></div>
  <div className="App5"><UseEffect/></div>
      <div  className="App6">
        <h1>UseContext</h1>
        <BlogContext.Provider value={bloginfo}>
        <BlogContextDemo/>
        </BlogContext.Provider >
      </div>
    </div>
    )
  }
  export default App;
