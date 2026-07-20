interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const tasks: Task[] = [];

export function addTask(title: string): void {
  const newTask: Task = {
    id: Date.now(),
    title,
    isCompleted: false,
  };
  tasks.push(newTask);
}

export function completeTask(taskId: number): void {
  const myTask = tasks.find((task) => task.id === taskId);
  if (myTask && myTask.isCompleted === false) {
    myTask.isCompleted = true;
  }
}