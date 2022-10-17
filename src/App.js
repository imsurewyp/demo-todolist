import {useEffect, useState} from "react";
import {TodoList} from "./TodoList";
import {CompletedList} from "./CompletedList";

function App() {

    const [tasksList,setTaskList] = useState([{name:'学英语',state:true,id:1},{name:'看电影',state:false,id:2}])
    const [todoTasks,setTodoTasks] = useState([])
    const [completedTasks,setCompletedTasks] = useState([])
    useEffect(()=>{
        setTodoTasks(tasksList.filter((task)=>task.state === false));
        setCompletedTasks(tasksList.filter((task)=>task.state === true));
    },[tasksList])
    const toggleTodoTask = (index,isChecked)=>{
        todoTasks[index].state = isChecked;
        setTodoTasks(todoTasks);
        setTaskList([...todoTasks,...completedTasks]);
        console.log('todo操作后');
        console.log(tasksList);
    }
    const toggleCompletedTask = (index,isChecked)=>{
        completedTasks[index].state = isChecked;
        setCompletedTasks(completedTasks);
        setTaskList([...todoTasks,...completedTasks]);
        console.log('completed操作后')
        console.log(tasksList);
    }
  return (
    <div >
        <input type="text"/>
      <h1>Todo List</h1>
      <TodoList todoTasks= {todoTasks} toggleTodoTask={toggleTodoTask}/>
      <h1>Completed List</h1>
        <CompletedList completedTasks= {completedTasks} toggleCompletedTask={toggleCompletedTask}></CompletedList>
    </div>
  );
}

export default App;
