import { type } from "@testing-library/user-event/dist/type";
import { Activity, useReducer, useState } from "react";
import { useImmerReducer } from "use-immer";

const tasks = {
  user: "",
  activity: [
    { id: 0, text: "ciao" },
    { id: 1, text: "ciao" },
  ],
};
let index = 2;

export default function Main() {
  const [list, dispatch] = useImmerReducer(Reducer, tasks);

  function Handleaddtask(text) {
    dispatch({ type: "added", id: index++, text: text });
  }
  return (
    <div>
      <AddActivity addTask={Handleaddtask} />
      <ListActivities tasks={list.activity} />
      {list.user !== "" ? <h1>welcome: {list.user}</h1> : "Welcome: anonymous"}
      <Login
        user={(user) => {
          console.log(user);
          dispatch({ type: "user", user: user });
        }}
      />
    </div>
  );
}

export function ListActivities({ tasks }) {
  console.log(tasks);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export function AddActivity({ addTask }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="form-control"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(text);
          setText("");
        }}
      >
        Aggiungi
      </button>
    </div>
  );
}

export function Login({ user }) {
  const [text, setText] = useState("");
  return (
    <div>
      <p>Username</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          user(text);
        }}
      >
        login
      </button>
    </div>
  );
}
//draft è la copia dell'oggetto che ho già mentre action quello nuovo
function Reducer(draft, action) {
  switch (action.type) {
    case "added":
      draft.activity.push({
        id: action.id,
        text: action.text,
      });
      break;

    case "user":
      draft.user = action.user;
      break;
    default:
      throw Error("azione non trovata");
  }
}
//2 componenti login, list activities, poter aggiungere attività
//lista e stringa utente
