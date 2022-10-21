import { Button, Checkbox, Input } from 'antd';
import { cloneDeep } from 'lodash';

export function CompletedList({ todoTasks, setTodoTasks, completedTasks, setCompletedTasks }) {
  const handleCheck = (index) => {
    setTodoTasks([...todoTasks, completedTasks[index]]);
    completedTasks.splice(index, 1);
  };

  const handleChange = (e, index) => {
    completedTasks[index].name = e.target.value;
    setCompletedTasks(cloneDeep(completedTasks));
  };

  const handleEnter = (index) => {
    completedTasks[index].readOnly = !completedTasks[index].readOnly;
    setCompletedTasks(cloneDeep(completedTasks));
  };

  const handleDelete = (index) => {
    completedTasks.splice(index, 1);
    setCompletedTasks(cloneDeep(completedTasks));
  };

  return (
    <>
      {completedTasks?.map((item, index) => {
        return (
          <div key={`${index}+${item.name}`}>
            <Checkbox onChange={() => handleCheck(index)} checked>
              <Input
                value={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                autoFocus={!item.readOnly}
                onPressEnter={() => handleEnter(index)}
                onChange={(e) => handleChange(e, index)}
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
