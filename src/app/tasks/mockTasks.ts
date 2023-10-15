import { ITask } from "./ITask";

export const mockTasks: ITask[] = [
    {
      title: 'Complete project proposal',
      status: 'In Progress',
      priority: 'High',
      deadline: '2023-10-20',
      completed: true,
    },
    {
      title: 'Review and test new feature',
      status: 'To Do',
      priority: 'Medium',
      deadline: '2023-10-25',
      completed: false,
    },
    {
      title: 'Prepare presentation',
      status: 'Done',
      priority: 'Low',
      deadline: '2023-10-15',
      completed: false,
    },
    // Add more task objects as needed
  ];
  