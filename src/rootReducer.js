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
      return {
        completedTasks: [...state.completedTasks, state.todoTasks[action.payload]],
        todoTasks: cloneDeep(state.todoTasks.splice(action.payload, 1))
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
