import { Checkbox, Input } from 'antd';
// import { Button } from 'antd';
// import { cloneDeep } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

export function TodoList() {
  const todoList = useSelector((state) => state.todoTasks);

  const dispatch = useDispatch();
  const handleCheck = (index) => {
    dispatch({ type: 'toggle todo task', payload: index });
  };

  // const onChange = (e, index) => {
  //   todoTasks[index].name = e.target.value;
  //   setTodoTasks(cloneDeep(todoTasks));
  // };
  //
  // const handleEnter = (index) => {
  //   todoTasks[index].readOnly = !todoTasks[index].readOnly;
  //   setTodoTasks(cloneDeep(todoTasks));
  // };
  //
  // const handleDelete = (index) => {
  //   todoTasks.splice(index, 1);
  //   setTodoTasks(cloneDeep(todoTasks));
  // };

  return (
    <>
      {todoList?.map((item, index) => {
        return (
          <div key={`${index}${item.name}`}>
            <Checkbox onChange={() => handleCheck(index)}>
              <Input
                defaultValue={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                autoFocus={!item.readOnly}
                // onChange={(e) => onChange(e, index)}
                // onPressEnter={() => handleEnter(index)}
              />
            </Checkbox>
            {/*<Button onClick={() => handleDelete(index)}> delete</Button>*/}
            {/*<Button onClick={() => handleEnter(index)}> edit</Button>*/}
          </div>
        );
      })}
    </>
  );
}
