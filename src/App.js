import React, {  useState } from 'react'
import './App.css';
import FormBar from './components/FormBar'
import StudenstList from './components/StudenstList'

function App() {
  const [isGetStudents,setGetStudents] = useState(true);
  const am = isGetStudents? <StudenstList/>:<div>how</div>

  return (
  
    <div className="App">
     <h1>sample project frontend</h1>
     <FormBar isGetStudents={isGetStudents} setGetStudents ={setGetStudents}/>
      {am}
    </div>

  );
}
 
export default App;
