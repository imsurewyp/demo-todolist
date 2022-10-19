import { Checkbox, Input } from 'antd';
import { Button } from 'antd';

export function TodoList({ todoTasks, toggleTask, deleteTask, editTask, editButton }) {
  const flag = 'todo';
  const onChange = (e, index) => {
    const isChecked = e.target.checked;
    toggleTask(index, isChecked, flag);
  };

  return (
    <>
      {todoTasks.map((item, index) => {
        return (
          <div key={`${index}${item.name}`}>
            <Checkbox onChange={(e) => onChange(e, index)}>
              <Input
                defaultValue={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                onPressEnter={(e) => editTask(e, index, flag)}
              />
            </Checkbox>
            <Button onClick={() => deleteTask(index, flag)}> delete</Button>
            <Button onClick={() => editButton(index, flag)}> edit</Button>
          </div>
        );
      })}
    </>
  );
}
