export default function Avatar(){
    //definisco una costante
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "avatar";
    return(
        <>
        <img
        //uso le costanti definite sopra
         src={avatar}
         alt={description}
         ClassName="avatar"/>
        {/* chiamo una funzione */}
        {TodoList()}
        <h1>doppie graffe</h1>
        {DoppieGraffe()}
        </>
    );
}

export function TodoList(){
    const name ="fulvios";
    return(
        <>
        <h1>{formatDate(today)} {name}'s' Todo List</h1>
        </>
    );
}
 const today = new Date();

function formatDate(date){
    //uso l'oggetto Intl per formattare la data
   return new Intl.DateTimeFormat("en-US", {
       //gli dico che il giorno della settimana lo voglio lungo
        weekday: "long",
        
   }).format(date);//formatto il giorno della settimana


}

export function DoppieGraffe(){
    return(
        <>
        <ul style={{
            backgroundColor:"black",
            color:"pink"
        }}>
            <li>Learn React</li>
        </ul>
        </>
    );
}