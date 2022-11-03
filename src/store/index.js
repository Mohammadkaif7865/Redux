import { createStore } from 'redux';
const reducerfn = (state = { counter: 0 }, action) => {
    // Synchronous Function
    // We should not mutate the original state
    return state;
}
const store = createStore(reducerfn);
export default store;