
import React,{useState} from "react";
import EditForm from "./EditForm";

const ToDo = ({ todo, toDos, setToDos, text }) => {
    //UseState state, text editors
    const [editState, setEditState] = useState(false);
    const [editText, setEditText] = useState(text);
      
    //Handler delete-btn
    const deleteHandler = () => {
        setToDos(toDos.filter((e) => e.id !== todo.id));      
    };
    //Handler complete-btn
    const completeHandler = () => {
        setToDos(toDos.map((item) => {
          if(item.id === todo.id){
              return{
                  ...item, completed: !item.completed
              }
          }
          return item;
        }))
    };
    //Handler state
    const stateHandler = () => {
        setEditState({
            editState: !editState
        });
      }

    return(
        <div className="todo">
            
            <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{editText}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={stateHandler} className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
            {editState ? 
            <EditForm 
                editState={editState} 
                setEditState={setEditState}
                editText={editText}
                setEditText={setEditText}
            /> 
            : null}
        </div>
    );
}

export default ToDo;