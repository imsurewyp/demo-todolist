import { Button, Checkbox, Input } from 'antd';

export function CompletedList({
  completedTasks,
  toggleTask,
  deleteCompletedTask,
  editCompletedTask,
  setTaskList,
  todoTasks
}) {
  const flag = 'completed';
  const onChange = (e, index) => {
    const isChecked = e.target.checked;
    toggleTask(index, isChecked, flag);
  };

  const deleteTask = (index) => {
    deleteCompletedTask(index);
  };

  const handleEdit = (index) => {
    completedTasks[index].readOnly = false;
    setTaskList([...todoTasks, ...completedTasks]);
  };
  const editTask = (e, index) => {
    editCompletedTask(e, index);
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
                onPressEnter={(e) => editTask(e, index)}
              />
            </Checkbox>
            <Button onClick={() => deleteTask(index)}> delete</Button>
            <Button onClick={() => handleEdit(index)}> edit</Button>
          </div>
        );
      })}
    </>
  );
}
