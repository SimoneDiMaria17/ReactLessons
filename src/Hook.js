import { useEffect,useRef, useState } from "react";

export default function Hook(){
    return(<div>
        {/* <h2>useRef</h2>
        <UseRef/> */}
        <h2>watch</h2>
        <StopWatch/>
        <h2>Focus</h2>
        <Focus/>
        <h2>Scroll</h2>
        <Scroll/>
        <h2>todo</h2>
        <TodoList/>
        <h2>video player</h2>
        <AutoPLayVideo/>
        <h2>array use effect</h2>
        {/* <EffectArray/> */}
    </div>)
}

export function UseRef(){
    let ref = useRef(0);
    function handleClick(){
        ref.current = ref.current +1;
        alert(ref.current);
    }
    return(<div>
        <button onClick={handleClick}>clicca</button>
    </div>);
}


//schedulatore di task
export function StopWatch(){
    const [startTime,setStartTime] = useState(null);
    const[now,setNow] = useState(null);

    const interval = useRef(null)

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now);

        clearInterval(interval.current);

        interval.current = setInterval(()=>{
            setNow(Date.now);
        },10)
        
        
    }
    function handleStop(){
        clearInterval(interval.current)
    }

let secPassed = 0;
        if(startTime!=null && now!=null){
            secPassed = (now-startTime)/1000
        }

    return(<div>
        <p>{now}</p>
        <p>tempo passato: {secPassed}</p>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        </div>);
    
}

export function Focus(){
    const inputRef = useRef(null);
    function handle(){
        inputRef.current.focus();
    }
    return(<div>
        <input ref={inputRef}/>
        <button onClick={handle}>focus</button>
    </div>);
}

export function Scroll(){
    const firstRef = useRef(null);
    const SecondRef = useRef(null);
    const thirdRef = useRef(null);

    function HandleScroll1(){
        firstRef.current.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        });
    }
    function HandleScroll2(){
        SecondRef.current.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        });
    }
    function HandleScroll3(){
        thirdRef.current.scrollIntoView({
            behaviour:'smooth',
            block:'nearest',
            inline:'center'
        });
    }
    return(<div>
        <div>
        <button onClick={HandleScroll1}>1</button>
        <button onClick={HandleScroll2}>2</button>
        <button onClick={HandleScroll3}>3</button>
        </div>
        <ul>
        <li >
        <img src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="gay"
        ref={firstRef}/>
        </li>
        <li >
        <img src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="gay"
         ref={SecondRef}/>
        </li>
        <li>
        <img src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="gay"
         ref={thirdRef}/>
        </li>
        </ul>
    </div>)
}



let nextId=1;
let initialTodos = [
    {
    id:0,
    text:'mario'
    }
];
export function TodoList(){
    const listRef = useRef(null);
    const [text,setText] = useState('');
    const [todos,setTodos] = useState(initialTodos);

    function add(){

        const newTodo = {
            id:nextId++,
            text:text
        }
        setText('');
        setTodos([...todos,newTodo]);
        listRef.current.lastChild.scrollIntoView({
            behaviour:'smooth',
            block:'nearest'
        });
    }

    return(<>
        <button onClick={add}>Add</button>
        <input type="text"
        value={text}
        onChange={e=>setText(e.target.value)}
        />
        <ul ref={listRef}>
            {todos.map(todo=>(
            <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    </>);
}

//useEffect
//sincronizzacione con effetti
// un effetto è un evento che si verifica quando un component viene renderizzato
//usato per le chiamate api

export function VideoPlayer({src,isPlaying}){
    const ref = useRef(null);
    useEffect(()=>{
        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    });
    return(<>
    <video width="1000px" src={src} ref={ref}/>
    </>);
}

export function AutoPLayVideo(){
    const [isPlaying,setIsPlaying] = useState(false)
    return (<>
    <VideoPlayer 
      isPlaying = {isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <br></br>
      <button onClick={()=>setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>);
}

//useEffect con array, dove specifici le dipendenze
// export function EffectArray(){
//     // const [count,setCount] = useState();

//     // useEffect(()=>{
//     //     setCount(count+1);
//     // },[])//la qudra lo fa fare solo la prima volta che viene reinderizzato
//     // return(<>
//     //     <button>done</button>
//     // </>)
//     const ref = useRef(null);
//     const [isPlaying,setIsPlaying] = useState(false)
//     const [text,setText] = useState('');

//     useEffect(()=>{
//         if(isPlaying){
//             ref.current.play();
//         }else{
//             ref.current.pause();
//         }
//     },[isPlaying]);

    
//      return (<>
//     <VideoPlayer 
//       isPlaying = {isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//       <br></br>
//       <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
//       <button onClick={()=>setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//     </>);
// } 

//senza array ogni rendere
//con array vuoto solo primo render
//con array con dati, quando viene modificata una variabile specificata nell'aaray



/*

function VideoPlayer({src, isPlaying}){
    const ref = useRef(null);

    // execute the code after every render 
    useEffect(() => {
        console.log("in useEffect");

        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }, [isPlaying])
            
    return (
        <video width="900" src={src} ref={ref} loop/>
    )
}

export default function App(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');

    return (
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying} />
        </>
    )
}
*/