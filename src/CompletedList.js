import { Button, Checkbox, Input } from 'antd';

export function CompletedList({
  completedTasks,
  toggleTask,
  deleteTask,
  editTask,
  setTaskList,
  todoTasks
}) {
  const flag = 'completed';
  const onChange = (e, index) => {
    const isChecked = e.target.checked;
    toggleTask(index, isChecked, flag);
  };
  const handleEdit = (index) => {
    completedTasks[index].readOnly = false;
    setTaskList([...todoTasks, ...completedTasks]);
  };
  return (
    <>
      {completedTasks.map((item, index) => {
        return (
          <div key={`${index}+${item.name}`}>
            <Checkbox onChange={(e) => onChange(e, index)} checked>
              <Input
                defaultValue={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                onPressEnter={(e) => editTask(e, index, flag)}
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
