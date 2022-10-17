import {Checkbox} from "antd";
import { Button } from 'antd';


export function TodoList({todoTasks,toggleTodoTask,deleteTodoTask}) {
    const onChange = (e, index) => {
       const isChecked = e.target.checked
        toggleTodoTask(index,isChecked)
    };

    const deleteTask = (index) => {
        deleteTodoTask(index);
    };

    return (
        <>
            {todoTasks.map((todo, index) =>{
                return (
                    <>
                <Checkbox key={index} onChange={(e) => onChange(e, index)}>{todo.name}</Checkbox>
                <Button onClick={()=>deleteTask(index)}> delete</Button>
                    </>
                    )
            }
            )}

        </>
    )
}