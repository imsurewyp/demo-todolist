import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedList } from './CompletedList';
import { Input } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [tasksList, setTaskList] = useState([
    { name: '学英语', state: true, readOnly: true },
    { name: '看电影', state: false, readOnly: true }
  ]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const mapTask = { todo: todoTasks, completed: completedTasks };

  useEffect(() => {
    setTodoTasks(tasksList.filter((task) => task.state === false));
    setCompletedTasks(tasksList.filter((task) => task.state === true));
  }, [tasksList]);

  const toggleTask = (index, isChecked, flag) => {
    const taskList = mapTask[flag];
    taskList[index].state = isChecked;
    if (flag === 'todo') {
      setTodoTasks(taskList);
    } else if (flag === 'completed') {
      setCompletedTasks(taskList);
    }
    setTaskList([...todoTasks, ...completedTasks]);
  };
  const deleteTask = (index, flag) => {
    const taskList = mapTask[flag];
    taskList.splice(index, 1);
    setTaskList([...todoTasks, ...completedTasks]);
  };
  const addTask = (e) => {
    const name = e.target.value;
    const newTodoTask = { name, state: false, readOnly: true };
    setTaskList([...tasksList, newTodoTask]);
    setInputValue('');
  };
  const editTask = (e, index, flag) => {
    const taskName = e.target.value;
    const taskList = mapTask[flag];
    taskList[index].name = taskName;
    taskList[index].readOnly = !taskList[index].readOnly;
    setTaskList([...todoTasks, ...completedTasks]);
  };
  // const editCompletedTask = (e, index) => {
  //   const taskName = e.target.value;
  //   completedTasks[index].name = taskName;
  //   completedTasks[index].readOnly = !completedTasks[index].readOnly;
  //   setTaskList([...todoTasks, ...completedTasks]);
  // };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <Input
        placeholder="请输入你的Todo Task"
        onPressEnter={addTask}
        value={inputValue}
        onChange={handleChange}
      />
      <h1>Todo List</h1>
      <TodoList
        todoTasks={todoTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
        setTaskList={setTaskList}
        completedTasks={completedTasks}
      />
      <h1>Completed List</h1>
      <CompletedList
        completedTasks={completedTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
        setTaskList={setTaskList}
        todoTasks={todoTasks}
      />
    </div>
  );
}

export default App;
