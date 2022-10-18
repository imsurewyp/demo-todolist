import {useEffect, useState} from "react";
import {TodoList} from "./TodoList";
import {CompletedList} from "./CompletedList";
import { Input } from 'antd';
import 'antd/dist/antd.css'

function App() {

    const [tasksList,setTaskList] = useState([{name:'学英语',state:true,id:1},{name:'看电影',state:false,id:2}])
    const [todoTasks,setTodoTasks] = useState([])
    const [completedTasks,setCompletedTasks] = useState([])
    const [inputValue,setInputValue] = useState('')

    useEffect(()=>{
        setTodoTasks(tasksList.filter((task)=>task.state === false));
        setCompletedTasks(tasksList.filter((task)=>task.state === true));
    },[tasksList])

    const toggleTodoTask = (index,isChecked)=>{
        todoTasks[index].state = isChecked;
        setTodoTasks(todoTasks);
        setTaskList([...todoTasks,...completedTasks]);
    }
    const toggleCompletedTask = (index,isChecked)=>{
        completedTasks[index].state = isChecked;
        setCompletedTasks(completedTasks);
        setTaskList([...todoTasks,...completedTasks]);
    }
    const deleteTodoTask =(index)=>{
        todoTasks.splice(index,1);
        setTaskList([...todoTasks,...completedTasks]);
    }
    const deleteCompletedTask =(index)=>{
        completedTasks.splice(index,1);
        setTaskList([...todoTasks,...completedTasks]);
    }
    const addTask = (e)=>{
        e.preventDefault();
        const name = e.target.value;
        const newTodoTask = {name,state:false};
        setTaskList([...tasksList,newTodoTask]);
        setInputValue('');

    }

    const editTodoTask = (e,index)=>{
        const taskName = e.target.value;
        todoTasks[index].name=taskName;
        setTaskList([...todoTasks,...completedTasks]);
    }
    const editCompletedTask = (e,index)=>{
        const taskName = e.target.value;
        completedTasks[index].name=taskName;
        setTaskList([...todoTasks,...completedTasks]);
    }
    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
  return (
    <div >
      <Input placeholder="请输入你的Todo Task"  onPressEnter={addTask} value={inputValue} onChange={handleChange}/>
      <h1>Todo List</h1>
      <TodoList todoTasks= {todoTasks}
                toggleTodoTask={toggleTodoTask}
                deleteTodoTask={deleteTodoTask}
                editTodoTask={editTodoTask}
                />
      <h1>Completed List</h1>
      <CompletedList completedTasks= {completedTasks}
                     toggleCompletedTask={toggleCompletedTask}
                     deleteCompletedTask={deleteCompletedTask}
                     editCompletedTask={editCompletedTask}
                    />
    </div>
  );
}

export default App;
