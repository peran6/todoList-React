import React,{ useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/todoList';


function App() {
  //useState text, toDo
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  //useState status, filtered
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilterdTodos] = useState([]);

  //UseEffect retrieve from localhost
  useEffect(() => {
  getLocalToDos();
  }, [] );
  //UseEffect filters and save
  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [toDos,status] );

  //Function for filtering
  const filterHandler = () => {
    switch(status){
      case "completed": 
        setFilterdTodos(toDos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted": 
        setFilterdTodos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterdTodos(toDos);
        break;
    }
  }

  //Save to local
  const saveLocalToDos = () => { 
   localStorage.setItem('toDos',JSON.stringify(toDos));
  };
  //Retrive from local
  const getLocalToDos = () => {
    if(localStorage.getItem('toDos') === null){
      localStorage.setItem('toDos',JSON.stringify([]));
    }else{
      let toDoLocal = JSON.parse(localStorage.getItem("toDos"));
      setToDos(toDoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>--- Todo list ---</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        inputText={inputText}
        toDos={toDos} 
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <ToDoList 
        toDos={toDos}
        setToDos={setToDos}
        filteredTodos={filteredTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
