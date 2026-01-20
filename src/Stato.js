import { useState } from "react";
import {sculptureList} from "./Data"

//il problema è che la viariabile index non funziona e non viene passata come deve
// export default function Gallery(){
//     let index = 0;


//     function click(){
//         index++;
//     }

//     let sculpture = sculptureList[index];
//     return(<div>
//         <img src={sculpture.url} alt={sculpture.alt}/>
//         <h1>
//             {sculpture.name} / {sculpture.artist}
//         </h1>
//         <button onClick={click}>next</button>
//     </div>)
// }

//risolvere il problema (dire a react di salvare la variabile nello stato (memoria privata di react) )
export default function Gallery(){

    //const[variabile,metodo per cambiarla]=usestate(valore iniziale)
    const[index,setindex]= useState(0); //hook methood


    function click(){
        if(index<(sculptureList.length-1)){
            setindex(index+1);//modifico il valore
            
        }else{
            setindex(0);
        }
        
    }

    let sculpture = sculptureList[index];
    return(<div>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <h1>
            {sculpture.name} / {sculpture.artist}
        </h1>
        <button onClick={click}>next</button>
    </div>)
}
//lo stato è privato