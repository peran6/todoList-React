import React from "react";

import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredTodos, inputText, setInputText}) => {
  return(
  <div className="todo-container">
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <ToDo 
          setToDos={setToDos}
          toDos={toDos}
          todo={todo}
          text={todo.text} 
          inputText={inputText}
          setInputText={setInputText}
          key={todo.id} 

        />
      ))}
    </ul>
  </div>
  );
};

export default ToDoList;