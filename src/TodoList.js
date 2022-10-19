import {Checkbox, Input} from "antd";
import { Button } from 'antd';

export function TodoList({todoTasks,toggleTodoTask,deleteTodoTask,editTodoTask,setTaskList,completedTasks}) {
    const onChange = (e, index) => {
       const isChecked = e.target.checked
        toggleTodoTask(index,isChecked)
    };
    const deleteTask = (index) => {
        deleteTodoTask(index);
    };
    const editTask = (e,index) => {
        editTodoTask(e,index);
    };
    const handleEdit = (index) => {
       todoTasks[index].readOnly=false;
       setTaskList([...todoTasks,...completedTasks]);
    };


    return (
        <>
            {todoTasks.map((item, index) =>{

                    return (
                    <div  key={`${index}${item.name}`}>
                <Checkbox  onChange={(e) => onChange(e, index)}>
                    <Input defaultValue={item.name}
                           bordered={!item.readOnly}
                           readOnly={item.readOnly}
                           onPressEnter={(e)=>editTask(e,index)}
                           />
                </Checkbox>
                <Button onClick={() => deleteTask(index)}> delete</Button>
                <Button onClick={() => handleEdit(index)}> edit</Button>
                    </div>
                    )
            }
            )}

        </>
    )
}