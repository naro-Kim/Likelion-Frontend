import { createStore, configureStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const reducer = (state = [], action) => {
switch (action.type)  {
  case ADD_TODO:
    return [...state, {text: action.text, id: Date.now()}];
  case DELETE_TODO:
    return state.filter(toDo => toDo.id !== action.id);
  default:
    return state;
}    
};

const store = createStore(reducer);

const addToDo = text =>{
  return {
    type : ADD_TODO,
    text
  };
};

const deleteToDo = id =>{
  return {
    type : DELETE_TODO,
    id
  };
};


const dispatchDeleteToDo = e =>{
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDo);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value; 
  input.value = ""; // erase already provided input value
  dispatchAddToDo(toDo);
};


form.addEventListener("submit", onSubmit);