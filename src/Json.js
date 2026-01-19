const person={ // potrebbe provenire da un api
    name:"Fulvios",
    theme:{
        backgroundColor:"black",
        color:"pink"
    },
    img:"https://media.licdn.com/dms/image/v2/D5635AQHLrfNM5EMS9w/profile-framedphoto-shrink_800_800/B56Zsn5s1RJsAg-/0/1765900996259?e=1769428800&v=beta&t=QqX7FLRgICCv6sHTpX6_PSpJde-AL2CffnOqOkSnpKM"
}
export default function Json(){
    return(<>
        <div style={person.theme}>
        <h1>{person.name}'s Profile</h1>
        <img src={person.img} alt="ciiccio" className="avatar"/>
        </div>
    </>);
}


