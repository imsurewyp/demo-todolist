import {Checkbox, Input, Modal} from "antd";
import { Button } from 'antd';
import {useState} from "react";


export function TodoList({todoTasks,toggleTodoTask,deleteTodoTask}) {
    const[isEditVisible,setIsEditVisible]=useState(false)
    const onChange = (e, index) => {
       const isChecked = e.target.checked
        toggleTodoTask(index,isChecked)
    };

    const deleteTask = (index) => {
        deleteTodoTask(index);
    };

    const editTask = (index) => {
        console.log(index)
    };

    function showEditModal() {
        setIsEditVisible(true);
    };
    const handleCancel = () => {
        setIsEditVisible(false)
        console.log('eee')
    };

    return (
        <>
            {todoTasks.map((todo, index) =>{
                return (
                    <>
                <Checkbox key={index} onChange={(e) => onChange(e, index)}>{todo.name}</Checkbox>
                <Button onClick={()=>deleteTask(index)}> delete</Button>
                <Button onClick={showEditModal}> edit</Button>
                <Modal title="请进行编辑" open={isEditVisible} onOk={editTask} onCancel={handleCancel}>
                            <Input placeholder={todo.name}></Input>
                </Modal>

                    </>
                    )
            }
            )}

        </>
    )
}