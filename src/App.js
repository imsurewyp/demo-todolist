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

  useEffect(() => {
    setTodoTasks(tasksList.filter((task) => task.state === false));
    setCompletedTasks(tasksList.filter((task) => task.state === true));
  }, [tasksList]);

  const toggleTask = (index, isChecked, flag) => {
    const mapTask = { todo: todoTasks, completed: completedTasks };
    const taskList = mapTask[flag];
    taskList[index].state = isChecked;
    if (flag === 'todo') {
      setTodoTasks(taskList);
    } else if (flag === 'completed') {
      setCompletedTasks(taskList);
    }
    setTaskList([...todoTasks, ...completedTasks]);
  };

  const deleteTodoTask = (index) => {
    todoTasks.splice(index, 1);
    setTaskList([...todoTasks, ...completedTasks]);
  };
  const deleteCompletedTask = (index) => {
    completedTasks.splice(index, 1);
    setTaskList([...todoTasks, ...completedTasks]);
  };
  const addTask = (e) => {
    const name = e.target.value;
    const newTodoTask = { name, state: false, readOnly: true };

    setTaskList([...tasksList, newTodoTask]);
    setInputValue('');
  };
  const editTodoTask = (e, index) => {
    const taskName = e.target.value;
    todoTasks[index].name = taskName;
    todoTasks[index].readOnly = !todoTasks[index].readOnly;
    setTaskList([...todoTasks, ...completedTasks]);
  };
  const editCompletedTask = (e, index) => {
    const taskName = e.target.value;
    completedTasks[index].name = taskName;
    completedTasks[index].readOnly = !completedTasks[index].readOnly;
    setTaskList([...todoTasks, ...completedTasks]);
  };
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
        deleteTodoTask={deleteTodoTask}
        editTodoTask={editTodoTask}
        setTaskList={setTaskList}
        completedTasks={completedTasks}
      />
      <h1>Completed List</h1>
      <CompletedList
        completedTasks={completedTasks}
        toggleTask={toggleTask}
        deleteCompletedTask={deleteCompletedTask}
        editCompletedTask={editCompletedTask}
        setTaskList={setTaskList}
        todoTasks={todoTasks}
      />
    </div>
  );
}

export default App;
