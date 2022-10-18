import {Checkbox, Input} from "antd";
import { Button } from 'antd';
import {useState} from "react";


export function TodoList({todoTasks,toggleTodoTask,deleteTodoTask,editTodoTask}) {
    const[isEditVisible,setIsEditVisible]=useState(true)
    const onChange = (e, index) => {
       const isChecked = e.target.checked
        toggleTodoTask(index,isChecked)
    };

    const deleteTask = (index) => {
        deleteTodoTask(index);
    };
    const editTask = (e,index) => {
        editTodoTask(e,index);
        setIsEditVisible(true);
    };

    function handleEdit() {
        setIsEditVisible(false);
    }

    return (
        <>
            {todoTasks.map((todo, index) =>{
                    return (
                    <div  key={`${index}*#`}>
                <Checkbox  onChange={(e) => onChange(e, index)}>
                    <Input defaultValue={todo.name} bordered={!isEditVisible} readOnly={isEditVisible}
                           onPressEnter={(e)=>editTask(e,index)}/>
                </Checkbox>
                <Button onClick={() => deleteTask(index)}> delete</Button>
                <Button onClick={handleEdit}> edit</Button>
                    </div>
                    )
            }
            )}

        </>
    )
}