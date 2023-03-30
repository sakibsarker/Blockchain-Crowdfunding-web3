
import './App.css'
import axios from 'axios'
function App() {

  async function backend(){
    const res=await axios("http://localhost:8080/");
    console.log(res.data);
  }

  return (
    <div className="App">
     <button onClick={()=>backend()}>Fetch Hello</button>
    </div>
  )
}

export default App
