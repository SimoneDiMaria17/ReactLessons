import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert("next: "+walk ? 'Stop' : 'Walk')
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
       <RequestTracker/>
    </>
  );
}


// Exercise 1 of 1: Fix a request counter 
// You’re working on an art marketplace app that lets the user submit multiple orders for an art item at the same time. Each time the user presses the “Buy” button, the “Pending” counter should increase by one. After three seconds, the “Pending” counter should decrease, and the “Completed” counter should increase.

// However, the “Pending” counter does not behave as intended. When you press “Buy”, it decreases to -1 (which should not be possible!). And if you click fast twice, both counters seem to behave unpredictably.

// Why does this happen? Fix both counters.



export  function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    
         setPending(pending => pending-1);
    
    setCompleted(completed + 1);

  }

  return (
    <>
    <h1>RequestTracker</h1>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}