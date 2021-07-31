import React, {FC, ChangeEvent ,useState} from 'react';
import './App.css';
import ToDoTask from './Components/ToDoTask';
import {ITask} from './Interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
  if(event.target.name === "task"){
    setTask(event.target.value)
  } else {
    setDeadline(Number(event.target.value))
  }
};

const completeTask = (taskNameToDelete: string) : void => {
  setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
  }))

};

const addTask = () : void => {
  const newTask = {taskName: task, deadline: deadline};
  setTodoList([...todoList, newTask])
};

  return (
    <div className="App">
     <div className="header">
       <div className="inputHeader">
          <input type="text" placeholder="Task.." name="task" onChange={handleChange}/>
          <input type="number" placeholder="Deadline (in days).." name="deadline" onChange={handleChange}/>
       </div>
       <button onClick={addTask}>Add Task</button>
     </div>
     <div className="todoList">
       {todoList.map((task: ITask, key: number) => {
         return <ToDoTask key={key} task={task} completeTask={completeTask}/>
       })}
     </div>
    </div>
  );
}

export default App;
function taskNameToDelete(taskNameToDelete: any, string: any): React.SetStateAction<ITask[]> {
  throw new Error('Function not implemented.');
}

