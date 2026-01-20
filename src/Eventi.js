import { click } from "@testing-library/user-event/dist/click";

//Gestione Eventi
export  function Button(){
    //innesto una funzione per la gestione del bottone
    function click(){
        alert("matteo sei un gay")
    }
    
    return(
        <div>
            <button onClick={click}> {/*la funzione va senza le parentesi */}
            Action
        </button>
        <AlertButton message={"ciao"}>
            ciao
        </AlertButton>
        </div>
    )
}

//tecnica closure 
function AlertButton({message,children}){
    return(
        <div>
            <button onClick={()=>alert(message)}>
                {children}
            </button>
        </div>
    )
}

function PlayButton(){
    function handler(){
        alert("pippo");
    }
    return(<Button onClick={handler}>play</Button>)
}

//propagazione di eventi (bubble) interno-> esterno
export default function Toolbar(){
    return(
        <div>
            <div onClick={()=> alert("bubble")} onClickCapture={()=>alert("capture")}> {/*capture esterno->interno_*/}
            <button onClick={(e)=>{
                e.stopPropagation(); 
                alert("stop")}}>play movie</button>
            <button onClick={()=> alert("2")}>play movie2\  </button>


            
        </div>
        <SignUp></SignUp>
        </div>
    );
}

export function SignUp(){
    return(<form onSubmit={()=>{alert("ciao")}}>
        <input></input>
        <button type="submit">submit</button>
    </form>)
}
