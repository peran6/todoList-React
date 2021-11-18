import React from "react";

const ToDo = ({  todo, toDos, setToDos, text  }) => {
    
    //Handler delete-btn
    const deleteHandler = () => {
        setToDos(toDos.filter((e) => e.id !== todo.id));      
    };
    //Handler complete-btn
    const completeHandler =() => {
        setToDos(toDos.map((item) => {
          if(item.id === todo.id){
              return{
                  ...item, completed: !item.completed
              }
          }
          return item;
        }))
    };


    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default ToDo;