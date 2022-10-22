import { useState } from 'react';
import { TodoList } from './TodoList';
import { CompletedList } from './CompletedList';
import { Input } from 'antd';
import 'antd/dist/antd.min.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const todoTasks = useSelector((state) => state.todoTasks);
  const completedTasks = useSelector((state) => state.completedTasks);

  return (
    <div>
      <Input
        placeholder="请输入你的Todo Task"
        onPressEnter={(e) =>
          dispatch({
            type: 'add task',
            payload: { name: e.target.value, completed: false, readOnly: true }
          })
        }
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Todo List</h1>
      <TodoList />
      <h1>Completed List</h1>
      <CompletedList />
    </div>
  );
}

export default App;
