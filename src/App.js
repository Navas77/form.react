import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Image from './components/image';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Colorset from './components/Colorset';
import Car from './components/car';
import Alert from './components/Useeffecttask';
import UseRef from './components/Focus';
import ScrollToTop from './components/Scrolltotop';
import SimpleForm from './components/onsubmit';
import ButtonClick1 from './components/Buttonclick';
import Students2 from'./components/Students2';
import Boom from './components/Boom';
import Buttonclick2 from './components/Buttonclick2';
import Togglediv from './components/Toggle';
import UseMemo from './components/UseMemo';
import Factorialcalculator from './components/Usememotask';
import Greatcount from './components/Usecallback';
import Title from './components/Title';
import {TitleWithHoverAnim} from './components/Title';
import paragraphWithHoverAnim, { ParagraphWithHoverAnim } from './components/Paragraph';


function Greeting(myData){
  return<h1>Hello,{myData.name}!</h1>
}
function App() {
  return (
    <div className="App">
     {/* <Form/> */}
     {/* <Image/> */}
     {/* <Greeting name="navas"/> */}
     {/* <Counter/> */}
    {/* <Timer/> */}
    {/* <Colorset/> */}
    {/* <Car/> */}
    {/* <Alert/> */}
    {/* <UseRef/> */}
    {/* <ScrollToTop/> */}
    {/* <SimpleForm/> */}
    {/* <ButtonClick1/> */}
    {/* <Students2/> */}
    {/* <SimpleForm/> */}
    {/* <Boom/> */}
    {/* <Buttonclick2/> */}
    {/* <Togglediv/>     */}
    {/* <UseMemo/> */}
    {/* <Factorialcalculator/> */}
    {/* <Greatcount/> */}
    
   
    <TitleWithHoverAnim/>
    <ParagraphWithHoverAnim/>
    </div>
    
  );
}

export default App;
