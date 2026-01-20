

import { people },{ recipes } from "./Data"; //prendo i dati da Data.js come se fosse un json
import { getImage } from "./Utils";
export default function List(){
    const chemist = people.filter(person => person.profession ==='chemist')
    var list = chemist.map((c)=>(
        <li key={c.id}> {/*gli collego una chiave che corrisponde all'id della persona */}
            <img
                src={getImage(c.imageId)}
                alt={c.name}
            />
            <p>
                <b>
                    {c.name}
                </b>
                {c.profession}
                {c.accomplishment}
            </p>
        </li>
    ));
    return(<ul>{list}</ul>)
}




export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}