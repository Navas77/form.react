import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Image from './components/image';
import Counter from './components/Counter';

function Greeting(myData){
  return<h1>Hello,{myData.name}!</h1>
}
function App() {
  return (
    <div className="App">
     <Form/>
     {/* <Image/> */}
     {/* <Greeting name="navas"/> */}
     {/* <Counter/> */}
    </div>
    
  );
}

export default App;
