import { Checkbox, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { cloneDeep } from 'lodash';

export function CompletedList() {
  const completedList = useSelector((state) => state.completedTasks);

  const dispatch = useDispatch();
  const handleCheck = (index) => {
    console.log(index);
    dispatch({ type: 'toggle completed task', payload: index });
  };

  // const handleChange = (e, index) => {
  //   completedTasks[index].name = e.target.value;
  //   setCompletedTasks(cloneDeep(completedTasks));
  // };
  //
  // const handleEnter = (index) => {
  //   completedTasks[index].readOnly = !completedTasks[index].readOnly;
  //   setCompletedTasks(cloneDeep(completedTasks));
  // };
  //
  // const handleDelete = (index) => {
  //   completedTasks.splice(index, 1);
  //   setCompletedTasks(cloneDeep(completedTasks));
  // };

  return (
    <>
      {completedList?.map((item, index) => {
        return (
          <div key={`${index}+${item.name}`}>
            <Checkbox onChange={() => handleCheck(index)} checked>
              <Input
                value={item.name}
                bordered={!item.readOnly}
                readOnly={item.readOnly}
                autoFocus={!item.readOnly}
                // onPressEnter={() => handleEnter(index)}
                // onChange={(e) => handleChange(e, index)}
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
