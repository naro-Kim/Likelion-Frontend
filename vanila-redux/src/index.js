import { createStore, configureStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.getElementById("num"); 

// prevent human error
const ADD = "ADD";
const MINUS = "MINUS";

// call reducer with current state and action
const reducer = (cnt = 0, action) => {
  // if (action.type === "ADD"){
  //   return cnt + 1 ;
  // } else if (action.type === "MINUS"){
  //   return cnt - 1;
  // } else {
  //   return cnt;
  // }
  // switch state
  switch (action.type) {
    case ADD:
      return cnt + 1;
    case MINUS:
      return cnt - 1;
    default:
      return cnt;
  }
};

// createStore function receives reducer as a parameter
const store = createStore(reducer);

// update values by getState
const onChange = () => {
  num.innerText = store.getState();
};

const handleAdd = () => {
  store.dispatch({ type: ADD });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

// update store by subscribing changes
store.subscribe(onChange);

// add event on button element with id
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
