import {useState} from "react";
import { Checkbox } from 'antd';
function TodoList({tasksList}) {
    const todoTasks = tasksList.filter((task)=>
        task.state === true
    );

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return(
        <>
            {todoTasks.map((todo,index)=>
                <Checkbox key={index} onChange={onChange}>{todo.name}</Checkbox>
            )}
        </>
    )
}
function CompletedList({tasksList}) {
    const todoTasks = tasksList.filter((task)=>
        task.state === false
    );

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return(
        <>
            {todoTasks.map((todo,index)=>
                <Checkbox key={index} onChange={onChange} defaultChecked='true'>{todo.name}</Checkbox>
            )}
        </>
    )
}

function App() {
    const [tasksList] = useState([{name:'学英语',state:true},{name:'看电影',state:false}])

  return (
    <div >
      <h1>Todo List</h1>
      <TodoList tasksList= {tasksList}/>
      <h1>Completed List</h1>
        <CompletedList tasksList= {tasksList} ></CompletedList>
    </div>
  );
}

export default App;
