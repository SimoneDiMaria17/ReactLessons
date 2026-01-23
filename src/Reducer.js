import { useReducer, useState } from "react";
import { TaskReducer } from "./TaskReducer";
import {useImmerReducer}  from 'use-immer'
import AppProducer from './Esercizi/Reducer/App'

export default function Main(){
    return(<div>
        <TaskApp/>
    <h1>Esercizi</h1>
    <AppProducer/>
    </div>)
}
export  function TaskApp() {
  //const [tasks, setTasks] = useState(initialTasks);

  const [tasks, dispatch] = useImmerReducer(TaskReducer, initialTasks);

  function handleAddTask(text) {
      dispatch({type: 'added', id:nextId++ ,text: text});
  }

  function handleChangeTask(task) {
      dispatch({type: 'changed',task: task});
  }

  function handleDeleteTask(taskId) {
      dispatch({type:'deleted',id:taskId})
  }

  return (
    <div className="m-2">
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
      
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];





export  function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  return (
    
    <div className="m-5 d-flex">
        <button
      className="btn btn-secondary me-3"
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        Add
      </button>
      <input
      className="form-control"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
    </div>
  );
}




export  function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul className="list-group m-5">
      {tasks.map((task) => (
        <li key={task.id} className="list-item">
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
        
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
            className="btn btn-secondary mx-2"
        onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="btn btn-secondary mx-2" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label className="d-flex w-25 flex-row align-items-center justify-content-around mt-2 mb-2">
      <input 
        className="form-check-input"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button className="btn btn-danger mx-2" onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}

