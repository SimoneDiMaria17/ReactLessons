import { useState } from "react";

//valutare le istruzioni da mandare al browser
export default function Counter(){
    const[number,setNumber] = useState(0);
    const add= 1;
    return (<div>
        <h1>
            {number}
        </h1>
        <button onClick={()=>{
             setNumber(number+add);
            setTimeout(()=>{
                 alert(number); //l'alert prende il number essendo asincrona nel momento che viene instanziata
            },3000);
        }}>
            +{add}
        </button>
        <h1>Form</h1>
        <Form/>
        <h1>updater</h1>
        <Updater/>
    </div>)
}

export function Form(){
    const [to,setTo] = useState('Alice');
    const [message,setMessage] = useState('Hello');


    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=>{
            alert("sending to: "+to+"\nMessage: "+message);
        },5000)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                To:<select
                    value={to}
                    onChange={e=>setTo(e.target.value)}>
                        <option value={'Alice'}>Alice</option>
                        <option value={'Bob'}>Bob</option>
                    </select>
                    <textarea placeholder="Message"
                        value={message}
                        onChange={e=>setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit">ciao</button>
            </form>
        </div>
    );
}

//funzione updater
export function Updater(){
    const[number,setNumber] = useState(0);
    const add= 1;
    return (<div>
        <h1>
            {number}
        </h1>
        <button onClick={()=>{
            // setNumber(number+add); queste vengono eseguite alla fine e quidi fanno tutte e 3 0+1
            // setNumber(number+add);
            // setNumber(number+add);
            setNumber(n=>n+1); // 0+1 uso updater così tengo conto del valore che aveva prima number 
            setNumber(n=>n+1);//1+1
            setNumber(n=>n+1);//2+1
        }}>
            +{add}
        </button>
    </div>)
}