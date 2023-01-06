import './App.css';
import { increment, decrement, incrementByAmount } from "./Redux/counter";
import { addName, removeLastName, removeThisName } from './Redux/names';
import { addText, getLorem } from './Redux/dummy';
import { ExtraText } from './Redux/moretex';
import { addFinalText } from './Redux/final';
import { SendTextMessage } from './Redux/sendDataThunk';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
function App() {
  const { value } = useSelector((state) => state.counter);
  const { names } = useSelector((state) => state.names);
  const {finalText} = useSelector((state) =>state.finalSentence);
  const [inputText, setInputText] = useState("");
  const { text, extraText, messageSend } = useSelector((state) => state.dummyText);
  const [name, setName] = useState("");
  const [removeName, setremoveName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLorem());
    dispatch(ExtraText(4));
    dispatch(addFinalText(1));
  }, []);
  const messageDone =()=>{
    dispatch(SendTextMessage({"message": inputText}));
  }
  const Increament = () => {
    dispatch(increment());
  }
  const Decreament = () => {
    dispatch(decrement());
  }
  const AddByTen = () => {
    dispatch(incrementByAmount(10));
  }
  return (

    <div className="App">
      <h1>This is Counter</h1>
      <h3>{value}</h3>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button>
      <button onClick={AddByTen}>AddByTen</button>
      <br />
      <label htmlFor="name">Enter the name to be Added:</label>
      <input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => { dispatch(addName(name)); setName(""); }}>Add name</button>
      <button onClick={() => dispatch(removeLastName())}>Remove Last Name</button>
      <br />
      <label htmlFor="removeName">Enter the Name which you want to remove:</label>
      <input type="text" id='removeName' value={removeName} onChange={(e) => setremoveName(e.target.value)} />
      <button onClick={() => dispatch(removeThisName(removeName))}>
        Remove Name
      </button>
      <div>
        {
          names.length > 0 ? names.map((item, i) => {
            return <p key={i}>{item}</p>
          }) : <p>Nothing in the names</p>
        }
      </div>
      <p>
        {text + extraText}

      </p>
      <button onClick={() => dispatch(addText("xyx my text"))}>AddText</button>
      <br />
      {
        messageSend? <label htmlFor="s-m">Message Have been recieved</label>: <label htmlFor="s-m">Message haven't  recieved</label>
      }
      <input type="text" id='s-m' value={inputText} onChange={(e)=> setInputText(e.target.value)} />
      <button onClick={messageDone}>Send message</button>
      <h1>This is the Final Text</h1>
      <p>{finalText}</p>
    </div>
  );
}
// just chilling around
// * The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders

// * A store that holds the state of your application.
/* Three Principles
 First Principle
 "The state of your whole application is stored in an object tree within a single store”
 Maintain our application state in a single object which would be managed by the Redux store
 Cake Shop —
 Let's assume we are tracking the number of cakes on the shelf
 {numberOfCakes: 10} */

// * An action that describes the changes in the state of the application.
// Three Principles

// Second Principle

// "The only way to change the state is to emit an action, an object describing what happened”

// To update the state of your app, you need to let Redux know about that with an action

// Not allowed to directly update the state object

// Cake Shop

// Let the shopkeeper know about our action — BUY_CAKE

// { type: BUY_CAKE}
// * A reducer which actually carries out the state transition depending on the action.
// Three Principles
// * Now we will start redux-toolkit react redux and redux tool-kit both are different things
export default App;
// 3/1/22
// 4/1/22 
// 5/1/22
// 6/1/22
