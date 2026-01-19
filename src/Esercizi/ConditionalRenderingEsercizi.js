// Exercise 1 of 3: Show an icon for incomplete items with ? : 
// Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked? ('✅'):('❌')}
    </li>
  );
}


export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
      <h2>Parte 2</h2>
      <div>
        <PackingList2/>
      </div>
      <h2>Parte 3</h2>
      <div>
        <DrinkList/>
      </div>
    </section>
  );
}



// Exercise 2 of 3: Show the item importance with && 
// In this example, each Item receives a numerical importance prop. Use the && operator to render “(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:

// Space suit (Importance: 9)
// Helmet with a golden leaf
// Photo of Tam (Importance: 6)

// Don’t forget to add a space between the two labels!


function Item2({ name, importance }) {
  return (
    <li className="item">
      {name}{importance!=0 && (<i>Importance: {importance}</i>)}
    </li>
  );
}

export  function PackingList2() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item2 
          importance={9} 
          name="Space suit" 
        />
        <Item2 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item2
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}


// Exercise 3 of 3: Refactor a series of ? : to if and variables 
// This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.

function Drink({ name }) {
    var obj = {
        name:name,
        type:"leaf",  
        wheight:"15–70 mg/cup",
        age:"4,000+ years"
    }
    if(obj.name!='tea'){
        obj.type  = "bean";
        obj.wheight = "80–185 mg/cup";
        obj.age = "1,000+ year";
    }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{obj.type}</dd>
        <dt>Caffeine content</dt>
        <dd>{obj.wheight}</dd>
        <dt>Age</dt>
        <dd>{obj.age}</dd>
      </dl>
    </section>
  );
}

export function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>)
}