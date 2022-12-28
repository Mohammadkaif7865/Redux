import './App.css';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const Increament = () => {
    dispatch({ type: 'INC' });
  }
  const Decreament = () => {
    dispatch({ type: 'DEC' });
  }
   const AddByTen = () => {
    dispatch({ type: 'ADD' , payload: 10});
   }
  return (

    <div className="App">
      <h1>This is Counter</h1>
      <h3>{counter}</h3>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button>
      <button onClick={AddByTen}>AddByTen</button>
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

// Third Principle

// "To specify how the state tree is transformed by actions, you write pure reducers”
// Reducer - (previousState, action) => newState

// Cake Shop
// 25 dec
// 26 dec
// 27 dec
// 28 dec
// Reducer is the shopkeeper
// * Now we will start redux-toolkit react redux and redux tool-kit both are different things
export default App;
