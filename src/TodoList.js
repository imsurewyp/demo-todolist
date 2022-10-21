import { Checkbox, Input } from 'antd';
import { Button } from 'antd';
import { cloneDeep } from 'lodash';
import { useEffect, useRef } from 'react';

export function TodoList({ todoTasks, setTodoTasks, completedTasks, setCompletedTasks }) {
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      console.log('todo', mounted);
    } else {
      console.log('todo I am didUpdate');
    }
    console.log('todo did mount');
    return () => {
      console.log('todo will unmount');
    };
  }, []);
  console.log('todo render');

  const handleCheck = (index) => {
    setCompletedTasks([...completedTasks, todoTasks[index]]);
    todoTasks.splice(index, 1);
  };

  const onChange = (e, index) => {
    todoTasks[index].name = e.target.value;
    setTodoTasks(cloneDeep(todoTasks));
  };

  const handleEnter = (index) => {
    todoTasks[index].readOnly = !todoTasks[index].readOnly;
    setTodoTasks(cloneDeep(todoTasks));
  };

  const handleDelete = (index) => {
    todoTasks.splice(index, 1);
    setTodoTasks(cloneDeep(todoTasks));
  };

  return (
    <>
      {todoTasks?.map((item, index) => {
        return (
          <div key={`${index}${item.name}`}>
            <Checkbox onChange={() => handleCheck(index)}>
              <Input
                defaultValue={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                autoFocus={!item.readOnly}
                onChange={(e) => onChange(e, index)}
                onPressEnter={() => handleEnter(index)}
              />
            </Checkbox>
            <Button onClick={() => handleDelete(index)}> delete</Button>
            <Button onClick={() => handleEnter(index)}> edit</Button>
          </div>
        );
      })}
    </>
  );
}
