import {Button, Checkbox} from "antd";

export function CompletedList({completedTasks, toggleCompletedTask,deleteCompletedTask}) {

    const onChange = (e, index) => {
        const isChecked = e.target.checked
        toggleCompletedTask(index, isChecked)
    };

    function deleteTask(index) {
        deleteCompletedTask(index);
    }

    return (
        <>
            {completedTasks.map((todo, index) => {
                    return (
                        <>
                            <Checkbox key={index} onChange={(e) => onChange(e, index)} checked>{todo.name}</Checkbox>
                            <Button onClick={() => deleteTask(index)}> delete</Button>
                            <Button> edit</Button>
                        </>
                    )
                }
            )}
        </>
    )
}