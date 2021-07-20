import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Body from './Components/body'
import {FaRunning} from 'react-icons/fa';
// import {GrBike} from 'react-icons/gr';
import {MdDirectionsBike} from 'react-icons/md';
import {FaSwimmer} from 'react-icons/fa';

function App() {
  const header = "An Update to My Basic React App";
  function myFun() {console.log("Button Clicked!");};
  const activities = [
    {id: 1, type: "swim", icon: <FaSwimmer />, dist: 1.2, color: "blue"},
    {id: 2, type: "bike", icon: <MdDirectionsBike />, dist: 56, color: "green"}, 
    {id: 3, type: "run", icon: <FaRunning />, dist: 13.1, color: "yellow"}
  ]
  return (
    <div className="App">
      <Header title={header} />
      <Body tri={activities} fun={myFun}/>
      <Footer author="Madison Bowden" />
    </div>
  );
}

export default App;
