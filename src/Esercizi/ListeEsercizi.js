import { people } from "../Data";
import { recipes } from "../Data"; //prendo i dati da Data.js come se fosse un json
import { getImage } from "../Utils";

// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

export default function List() {
  var chem = people.filter((person) => person.profession === "chemist");

  var altri = people.filter((person) => person.profession !== "chemist");

  return (
    <div>
      <article>
        <h1>Chimici</h1>
        <ul>
          <Stampa person={chem} />
        </ul>
        <h1>altri</h1>
        <ul>
          <Stampa person={altri} />
        </ul>
      </article>
      <hr></hr>
      <h1>recipe</h1>
      {RecipeList()}
      <hr></hr>
      <h1>Poem</h1>
      <Poem />
    </div>
  );
}

function Stampa({ person }) {
  var list = person.map((p) => (
    <li key={p.id}>
      <img src={getImage(p.imageId)} alt={p.name} />
      <p>
        <b>{p.name}:</b>
        {" " + p.profession + " "}
        known for {p.accomplishment}
      </p>
    </li>
  ));
  return list;
}

//Exercise 2 of 4: Nested lists in one component
//Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

export function RecipeList() {
  var ricette = recipes.map((r) => (
    <li key={r.id}>
      <h2>{r.name}</h2>
      <ol>
        {r.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ol>
    </li>
  ));
  return <ul>{ricette}</ul>;
}

// Exercise 3 of 4: Extracting a list item component
// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

function Recipie(id, name, ingredients) {
  return (
    <ul>
      <li key={id}>
        <h2>{name}</h2>
        <ol>
          {ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ol>
      </li>
    </ul>
  );
}

// Exercise 4 of 4: List with a separator
// This example renders a famous haiku by Tachibana Hokushi, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:

<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>;

// A haiku only contains three lines, but your solution should work with any number of lines. Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <div>
          {index > 0 ? <hr /> : null}
          <p key={index}>{line}</p>
        </div>
      ))}
    </article>
  );
}
