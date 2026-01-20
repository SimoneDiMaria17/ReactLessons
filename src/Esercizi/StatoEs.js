// Exercise 1 of 4: Complete the gallery 
// When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.

// After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.

import { useState } from 'react';
import { sculptureList } from '../Data';
import { findByPlaceholderText } from '@testing-library/dom';

export default function Galleria(){
    return(<div>
        <h1>1/4</h1>
        <Gallery/>
        <h1>2/4</h1>
        <Form/>
        <h1>3/4</h1>
        <FeedbackForm/>
        <h1>4/4</h1>
        <FeedbackForm2/>
    </div>);
}

export  function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
   if(index<(sculptureList.length-1)){
               setIndex(index+1);//modifico il valore
               
           }else{
               setIndex(0);
           }
  }
    //   function handleClick(value){
    //         if(value===-1&&index>0){
    //              setIndex(index+value)
    //         }else if(value===+1 &&index<(sculptureList.length-1)){
    //             setIndex(index+1);
    //         }else{
    //             setIndex(0);
    //         }
    //   }
  function handlePreviousClick(){
     if(index>0){
               setIndex(index-1);//modifico il valore
               
           }else{
               setIndex(0);
           }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

// Exercise 2 of 4: Fix stuck form inputs 
// When you type into the input fields, nothing appears. It’s like the input values are “stuck” with empty strings. The value of the first <input> is set to always match the firstName variable, and the value for the second <input> is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don’t seem to “remember” their values between re-renders. Fix this by using state variables instead.

export  function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setlastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
// Exercise 3 of 4: Fix a crash 
// Here is a small form that is supposed to let the user leave some feedback. When the feedback is submitted, it’s supposed to display a thank-you message. However, it crashes with an error message saying “Rendered fewer hooks than expected”. Can you spot the mistake and fix it?
export  function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
   const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
   
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
// Exercise 4 of 4: Remove unnecessary state 
// When the button is clicked, this example should ask for the user’s name and then display an alert greeting them. You tried to use state to keep the name, but for some reason the first time it shows “Hello, !”, and then “Hello, [name]!” with the previous input every time after.

// To fix this code, remove the unnecessary state variable.

// Can you explain why this state variable was unnecessary?



export function FeedbackForm2() {
  function handleClick() {
    var names = (prompt('What is your name?'));
    alert(`Hello, ${names}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
