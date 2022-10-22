import { cloneDeep } from 'lodash';

export const tasksList = [
  { name: '学英语', completed: false, readOnly: true },
  { name: '看电影', completed: true, readOnly: true },
  { name: 'nicai', completed: true, readOnly: true }
];
const tasks = {
  todoTasks: tasksList.filter((item) => !item.completed),
  completedTasks: tasksList.filter((item) => item.completed)
};
export const rootReducer = (state = tasks, action) => {
  switch (action.type) {
    case 'add task':
      return {
        ...state,
        todoTasks: [...state.todoTasks, action.payload]
      };
    case 'toggle todo task':
      const tempTodoTasks = cloneDeep(state.todoTasks);
      tempTodoTasks.splice(action.payload, 1);
      //array.splice(index,num):返回值是被删除的元素组成的数组
      return {
        completedTasks: [...state.completedTasks, state.todoTasks[action.payload]],
        todoTasks: tempTodoTasks
      };
    case 'toggle completed task':
      return {
        todoTasks: [...state.todoTasks, state.completedTasks[action.payload]],
        completedTasks: cloneDeep(state.completedTasks.splice(action.payload, 1))
      };

    default:
      return state;
  }
};
