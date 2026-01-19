import Profile from "../Profile";

 function Avatar(){
    //definisco una costante
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "avatar";
    return(
        <>
        <img
        //uso le costanti definite sopra
         src={avatar}
         alt={description}
         ClassName="avatar"
         width={100}
         height={100}/>
        </>
    );
}

export default function Profile2(){
    return(<>
        <Avatar/>
        </>);
}