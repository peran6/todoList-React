import React from "react";

const Form = ({ inputText ,setInputText ,toDos ,setToDos, setStatus}) => {
  
  //Handler input-text
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  //Handler submit-btn
  const submitToDoHandler =(e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      {
        text: inputText,
        completed: false,
        id: Math.random()*1000
      }
    ]);
    setInputText("");
  };
  //Handler status-change 
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;