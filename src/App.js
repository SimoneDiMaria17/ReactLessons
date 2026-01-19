import {getImage} from './Utils';

export default function Todo() {
  return (
    // frammento, sostituisce il div o simili
    <>
      <h1>Todo List</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="alternate-photo"
        ClassName="photo"
      />
      <ul>
        <li>Learn React</li>
        <li>Build a React App</li>
      </ul>
    </>
  );
}

export  function Bio() {	
  return (
    <>
    <h1>Bio</h1>
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p className="summary">
      You can find my thoughts here.
      <br/>
      <b>and<i>pictures</i></b> of scientists!
    </p>
    </>
  );
}

export function Avatar({person, size}) {
  return(<>
    <img 
      className='avatar'
      src={getImage(person,size)}
      alt='fulvios'
      width = {size}
      height = {size}
    />
  </>);
}
export function Profile(){
  return(<>
    <Avatar
    person = {{imageId: "7vQD0fP"}}
    size = {100}
    />
  </>)
}