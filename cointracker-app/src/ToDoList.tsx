import React, { useState } from "react";
import { useForm } from "react-hook-form"

function ToDoList() {
  // >>> Before using react-hook-form

  // const [toDo, setToDo] = useState("");
  // const [toDoError, setToDoError] = useState("");
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setToDoError("");
  //   setToDo(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if(toDo.length < 10 ) {
  //     return setToDoError("Error");
  //   }
  //   console.log(toDo);
  // };

  // >>> After using react-hook-form

  // register function to handleSubmit
  // don't need to write onChange event, props
  // register will handle onChange event
  // watch will track input value changing
  // handleSubmit will handle onSubmit event and validations

  const {register, handleSubmit, formState } = useForm(); 
  console.log(formState.errors);
  const onValid = (value: any) => {
    console.log(value);
  }; 
  return (
    <div>
      <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("name", {required:'Please write valid name' , minLength: {value : 10, message :"min length is  3"}, maxLength:20})} placeholder="name" />
        <input {...register("email", {required:'Please write valid email', minLength: 12, maxLength:40})} placeholder="email" />
        <input {...register("id", {required:'Please write valid id' , minLength: 5, maxLength:20})} placeholder="id" />
        <input {...register("password", {required:'Please write valid password' , minLength: 3, maxLength:20})} placeholder="password" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
