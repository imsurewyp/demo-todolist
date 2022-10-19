import { Checkbox, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { cloneDeep } from 'lodash';

export function TodoList({ todoTasks,setTodoTasks,completedTasks,setCompletedTasks }) {

  const[tempValue,setTempValue] = useState('');

  const handleCheck = (e,index)=>{
    setCompletedTasks([...completedTasks,todoTasks[index]]);
    todoTasks.splice(index,1);
  }

  const onChange = (e,index)=>{
    todoTasks[index].name=e.target.value
    setTodoTasks(cloneDeep(todoTasks))
  }

  const handleEdit = (index)=>{
    todoTasks[index].readOnly = !todoTasks[index].readOnly;
    setTodoTasks(cloneDeep(todoTasks))
  }

  const handleDelete = (index)=>{
    todoTasks.splice(index,1)
    setTodoTasks(cloneDeep(todoTasks))
  }



  return (
    <>
      {todoTasks.map((item, index) => {
        return (
          <div key={`${index}${item.name}`}>
            <Checkbox onChange={(e) => handleCheck(e,index)}>
              <Input
                  defaultValue={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                  autoFocus={!item.readOnly}
                onChange={(e) => onChange(e,index)}
                onPressEnter={(e) => handleEdit(index)}
              />
            </Checkbox>
            <Button onClick={() => handleDelete(index)}> delete</Button>
            <Button onClick={() => handleEdit(index)}> edit</Button>
          </div>
        );
      })}
    </>
  );
}
