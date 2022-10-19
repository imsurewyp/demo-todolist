import { Button, Checkbox, Input } from 'antd';

export function CompletedList({ completedTasks, toggleTask, deleteTask, editTask, editButton }) {
  const flag = 'completed';

  return (
    <>
      {completedTasks.map((item, index) => {
        return (
          <div key={`${index}+${item.name}`}>
            <Checkbox onChange={(e) => toggleTask(e, index, flag)} checked>
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
