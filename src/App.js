import logo from './logo.svg';
import './App.css';
import React , {useState} from "react" 
import Person from './profile/profile'; 
import Img from "./ché.jpg" 
import Counter from "./profile/c"

const persons=[{FullName:"shaouki sallemi", Bio:"futur ingénieure REACT.JS",img:Img ,Profession:"Développeur web" } ] ;
 function App() {
   const [show, setshow] = useState(false)
  
   return (
   <div className="Data">
     
     {persons
      
         .map((person) => (
          show?<Person data={person} />:"click here to appear the person's profile !"
        
          ))}
        
        <button onClick={()=>setshow(true)}>show</button>
     
    <Counter></Counter>
    
         
    </div>  
    
   )
         }
  


    // <>
    // </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


export default App;
