// This Gallery component contains some very similar markup for two profiles. Extract a 
// Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

const person ={
    name: "Katsuko Saruhashi",
    img:{
        imageId:"YfeOqp2",
        size:90,
    },
    profession:"geochemist",
    awards:2,
    awardsList:["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered:"a method for measuring carbon dioxide in seawater"

};
const persons =[{
    name: "Katsuko Saruhashi",
    img:{
        imageId:"YfeOqp2",
        size:90,
    },
    profession:"geochemist",
    awards:2,
    awardsList:["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered:"a method for measuring carbon dioxide in seawater"

},{
    name: "Katsuko Saruhashi",
    img:{
        imageId:"YfeOqp2",
        size:90,
    },
    profession:"geochemist",
    awards:2,
    awardsList:["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered:"a method for measuring carbon dioxide in seawater"

}];

export function Profile({person}) {
    if(person.img.size<90){
        person.img.size= 's'
    }else{
        person.img.size= 'b'
    }
    return(<>
    
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(person.img.imageId,person.img.size)}
          alt={person.name}
          width={person.img.size}
          height={person.img.size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards}</b>
            {person.awardsList}
          </li>
          <li>
            <b>Discovered: </b>{person.discovered}
          </li>
        </ul>
      </section>
    
    </>)
}
export default function ChildrenEs() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      
      <Card>
        {persons.map((p) => (
            <Profile person={p} key={p.name}/>
        ))
        
        }
      </Card>
    </div>
  );
}

function checkSize(size){
    if(size<90){
        return 's'
    }else{
        return 'b'
    }
}

function Card({children}) {
	return (
		<div className="card">
			{children}	{/* si riferisce la figlio*/}
		</div>
	)
}
