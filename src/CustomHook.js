import { useEffect,useRef, useState } from "react";
export function useOnlineStatus(){
    const [isOnline,setIsOnline] = useState(true);
    useEffect(()=>{
            function handleOnline(){
            setIsOnline(true);
            }
            function handleOffline(){
                setIsOnline(false);
            }
            window.addEventListener('online',handleOnline);
            window.addEventListener('offline',handleOffline);
    
            return ()=> {
                 window.removeEventListener('online',handleOnline);
                window.removeEventListener('offline',handleOffline);
            }
        },[]);
    return isOnline;
}

export function UseFormInput({initialValue}){
    const [value,setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps={
        value:value,
        onChange:handleChange
    }
    
    return inputProps
}