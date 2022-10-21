import { useEffect, useRef, useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedList } from './CompletedList';
import { Input } from 'antd';
import 'antd/dist/antd.min.css';

function App() {
  const tasksList = [
    { name: '学英语', completed: false, readOnly: true },
    { name: '看电影', completed: true, readOnly: true }
  ];

  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    const newTodoTask = { name: e.target.value, completed: false, readOnly: true };
    setTodoTasks([...tasksList, newTodoTask]);
    setInputValue('');
  };
  const mounted = useRef();
  useEffect(() => {
    setTodoTasks(tasksList.filter((item) => !item.completed));
    setCompletedTasks(tasksList.filter((item) => item.completed));
    if (!mounted.current) {
      mounted.current = true;
      console.log('app', mounted);
    } else {
      console.log('app I am didUpdate');
    }
    console.log('app did mount');
    // console.log('inner', todoTasks);
    // console.log('inner', completedTasks);
    return () => {
      console.log('app will unmount');
    };
  }, []);
  // console.log('out', todoTasks);
  // console.log('out', completedTasks);
  console.log('app render');

  return (
    <div>
      <Input
        placeholder="请输入你的Todo Task"
        onPressEnter={addTask}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Todo List</h1>
      <TodoList
        todoTasks={todoTasks}
        setTodoTasks={setTodoTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
      <h1>Completed List</h1>
      <CompletedList
        todoTasks={todoTasks}
        setTodoTasks={setTodoTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
  );
}

export default App;
