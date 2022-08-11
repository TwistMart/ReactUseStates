import './App.css';
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true); 
  const [textColor, setTextColor] = useState("black"); 

  return (
    <div className="App">
    <button onClick={() => {
      setShowText(!showText);
      setTextColor(textColor === "black" ? "red" : "black");
    }}> 
      Show/Hide </button>
    {showText === true && <h1> Hello my name is Martin </h1> } 
    <h1 style={{color: textColor}}> And i am so hyped </h1>   
    </div>
  );
}

export default App;


// useState to modify what is in target


// import './App.css';
// import { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
  
//   const handleInputChange = (event) => {

//     setInputValue(event.target.value);
//     console.log(event.target.value);
//   };
//   return (
//     <div className="App">
//     <input type="text" onChange= {handleInputChange} />
//     {inputValue}
//     </div>
//   );
// }

// export default App;





// Using useState to make react make changes to modified data i.e the age

// import './App.css';
// import { useState } from "react";

// function App() {
//   const [age,setAge] = useState(26);

//   const increaseAge = () => {
//     setAge(age+1);
    

//   };
//   return (
//     <div className="App">
//      {age}
//      <button onClick={increaseAge}> Increase age </button>
//     </div>
//   );
// }

// export default App;
