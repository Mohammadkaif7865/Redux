import { createStore } from 'redux';
const reducerfn = (state = { counter: 0 }, action) => {

}
const store = createStore(reducerfn);
export default store;