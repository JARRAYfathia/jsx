import logo from './logo.svg';
import './App.css';
import "./style.css";
import work from "./work.jpg";

function App() {
  return (
    <div className="App">
     <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
       <h1 className='title'>JARRAY Fathia</h1>
       <br/>
       <h2> Fathia divides her time between:</h2>
       <h3>Work:</h3>
       <img src={work} style={{width: "550px"}} />
       <br/>
       <h3>Hobbies:</h3>
       <img src="./other.jpg" alt="" style={{width: "550px"}} />
     </div>
     <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
     <h3>Learning:</h3>
     <video width={650} height={500} controls>
       <source src="/learn.mp4" type="video/mp4" />
     </video>
     </div>
     
    </div>
  );
}

export default App;
