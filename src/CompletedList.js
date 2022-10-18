import {Button, Checkbox, Input} from "antd";
import {useState} from "react";

export function CompletedList({completedTasks, toggleCompletedTask,deleteCompletedTask,editCompletedTask}) {
    const[isEditVisible,setIsEditVisible]=useState(true)
    const onChange = (e, index) => {
        const isChecked = e.target.checked
        toggleCompletedTask(index, isChecked)
    };

    const deleteTask = index => {
        deleteCompletedTask(index);
    };

    const handleEdit = () => {
        setIsEditVisible(false);
    };
    const editTask = (e,index) => {
        editCompletedTask(e,index);
        setIsEditVisible(true);
    };

    return (
        <>
            {completedTasks.map((todo, index) => {
                    return (
                        <div key={`${index}*`}>
                            <Checkbox key={index} onChange={(e) => onChange(e, index)} checked>
                                <Input  defaultValue={todo.name} bordered={!isEditVisible} readOnly={isEditVisible}
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