import { useState } from "react";

export default function Converter(){
    const [number,setNumber] = useState(0);

    function change(e,far){
        if(far){
            let far = (e.target.value-32)*(5/9);
            setNumber(far);
        }else{
            setNumber(e.target.value)
        }
    }

    return(<div>
        <input label="celsius" value={number} onChange={(e)=>change(e,false)} />
        <input label="farenotte" value={(number*(9/5))+32} onChange={(e)=>change(e,true)} />
    </div>);
}