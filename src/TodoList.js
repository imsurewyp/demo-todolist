import { Checkbox, Input } from 'antd';
import { Button } from 'antd';

export function TodoList({
  todoTasks,
  toggleTask,
  deleteTask,
  editTodoTask,
  setTaskList,
  completedTasks
}) {
  const flag = 'todo';
  const onChange = (e, index) => {
    const isChecked = e.target.checked;
    toggleTask(index, isChecked, flag);
  };
  const editTask = (e, index) => {
    editTodoTask(e, index);
  };
  const handleEdit = (index) => {
    todoTasks[index].readOnly = false;
    setTaskList([...todoTasks, ...completedTasks]);
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
                onPressEnter={(e) => editTask(e, index)}
              />
            </Checkbox>
            <Button onClick={() => deleteTask(index, flag)}> delete</Button>
            <Button onClick={() => handleEdit(index)}> edit</Button>
          </div>
        );
      })}
    </>
  );
}
