import { people } from "../Data";
import { getImage } from '../Utils';


// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.


export default function List() {
    var chem = people.filter(person => person.profession ==='chemist');
    

var altri = people.filter(person => person.profession !== 'chemist')

  return (
    <article>
      <h1>Chimici</h1>
      <ul><Stampa person={chem}/></ul>
      <h1>altri</h1>
      <ul><Stampa person={altri}/></ul>
    </article>
  );
}

function Stampa(person){
    var list = person.map(p =>
    <li key={p.id}>
      <img
        src={getImage(p)}
        alt={p.name}
      />
      <p>
        <b>{p.name}:</b>
        {' ' + p.profession + ' '}
        known for {p.accomplishment}
      </p>
    </li>)
    return list 
}