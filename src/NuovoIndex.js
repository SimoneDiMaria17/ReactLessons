import { useEffect,useRef, useState } from "react";
import {useOnlineStatus} from "./CustomHook";

//creando una chat room

function createConnection(){
    return{ //creo un oggetto da ritornare
        connect(){
            console.log("Connecting")
        },
        disconnect(){
            console.log("Disconnection")
        }
    }
}

export  function Chat(){
    useEffect(()=>{
        const connection = createConnection();
        connection.connect();


        return ()=>{connection.disconnect()};
    },[])
    
    return(<>
    <h1>benvenuto nella roomEna chat</h1>
    </>);
}

export function Main(){
    const [show,setShow] = useState(true);
    if(show){
        return(<>
            <Chat/>
            <button onClick={()=>setShow(false)}>chiudi</button>
        </>)
    }else{
        return(<>
            
            <button onClick={()=>setShow(true)}>apri</button>
        </>)
    }
}

// Exercise 1 of 3:  Focus a field on mount 
// In this example, the form renders a <MyInput /> component.
// Use the input’s focus() method to make MyInput automatically focus when it appears on the screen. There is already a commented out implementation, but it doesn’t quite work. Figure out why it doesn’t work, and fix it. (If you’re familiar with the autoFocus attribute, pretend that it does not exist: we are reimplementing the same functionality from scratch.)





export  function MyInput1({ value, onChange }) {
  const ref = useRef(null);

  // TODO: This doesn't quite work. Fix it.
  // ref.current.focus()
  useEffect(()=>{
    ref.current.focus()
  });

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

// Exercise 2 of 3: Focus a field conditionally 
// This form renders two <MyInput /> components.
// Press “Show form” and notice that the second field automatically gets focused. This is because both of the <MyInput /> components try to focus the field inside. When you call focus() for two input fields in a row, the last one always “wins”.
// Let’s say you want to focus the first field. The first MyInput component now receives a boolean shouldFocus prop set to true. Change the logic so that focus() is only called if the shouldFocus prop received by MyInput is true.



export   function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    if(shouldFocus){
     ref.current.focus();
    }}, []);
  
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}




export  function Form() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const [upper, setUpper] = useState(false);
  const name = firstName + ' ' + lastName;
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}

// Exercise 3 of 3: Fix fetching inside an Effect 
// This component shows the biography for the selected person. It loads the biography by calling an asynchronous function fetchBio(person) on mount and whenever person changes. That asynchronous function returns a Promise which eventually resolves to a string. When fetching is done, it calls setBio to display that string under the select box.

// There is a bug in this code. Start by selecting “Alice”. Then select “Bob” and then immediately after that select “Taylor”. If you do this fast enough, you will notice that bug: Taylor is selected, but the paragraph below says “This is Bob’s bio.”
// Why does this happen? Fix the bug inside this Effect.

export async function fetchBio(person) {
  const delay = person === 'Bob' ? 2000 : 200;
  return new Promise(resolve => {
    
    setTimeout(() => {
      resolve('This is ' + person + '’s bio.');
    }, delay);
  })
}


export  function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let toDo = true;
    setBio(null);
    fetchBio(person).then(result => {
        if(toDo){
            setBio(result);
        }
    });
    return ()=> {toDo = false}
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}


// riusare logica su custom hooks
export  function StatusBar(){
    
    
    const isOnline = useOnlineStatus();
    return(<>   
    <h1>is {isOnline?'Online':'Offline'}</h1>
    </>)
}

export  function SaveButton(){
    
    
    const isOnline = useOnlineStatus();
    function handleSaveClick(){
        console.log("ciao")
    }
    return(<div>
        <button disabled={!isOnline} onClick={handleSaveClick}>click</button>
    </div>);
}
export default function App(){  
    return(<>
        <SaveButton/>
        <StatusBar/>
    </>)
}


