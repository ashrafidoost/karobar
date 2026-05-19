interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

const tasks: Task[] = [];

function addTask(title: string): void {
    const newTask: Task = {
        id: Date.now(),
        title: title,
        isCompleted: false,
    }
    tasks.push(newTask);
}

function completeTask(taskId: number): void {
    const myTask = tasks.filter(task => task.id === taskId);
    if (myTask.isCompleted === false) {
        myTask.isCompleted = true;
    }
}