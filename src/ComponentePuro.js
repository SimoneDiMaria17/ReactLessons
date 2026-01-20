//lasciate i componenti puri (dipende solo dai suoi parametri


//questo non va bene perchè il component non è puro
// export function Cup(){
//     guest++;
//     return(
//         <h2>
//             Tea Cup n.{guest}
//         </h2>
//     )
// }

//questo va bene perchè usa una variabile che gli viene passata
 export function Cup({guest}){
    guest++;
    return(
        <h2>
            Tea Cup n.{guest}
        </h2>
    )
}
export default function SetTea(){
    let guest = 0;
    return(
        <>
            <Cup guest={guest}/>
            {TeaSet()}
        </>
    );
}

function TeaSet(){
    const cups=[];
    for(let i=1;i<=10;i++){
        cups.push(<Cup key={i} guest={i}/>)
    }
    return cups
}