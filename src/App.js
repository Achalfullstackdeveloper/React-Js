// import {ProfileImageOne , ProfileImageTwo, ProfileImageThree } from "./TypesOfExport"
// import  ProfileImageOne ,{ ProfileImageTwo, ProfileImageThree } from "./TypesOfExport/SimpleJSX";
import logo from "./logo.svg";
import "./App.css";
// import "./JSX/ConditionalJSX";
// import SimpleJSX from "./JSX/LoopJSX";
// import LoopJSX from "./JSX/LoopJSX";
// import ConditionalJSX from "./WithoutState/WithoutState";
// import WithoutState from "./WithoutState/WithoutState";
import MyComponent from "./MyComponent";
// import MyComponent from './MyButton';
// import TableComponent from './MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <MyComponent/> 
      </header>
    </div>
  );
}

export default App;
