import { use, useRef, useState } from "react";

export default function Main() {
  return (
    <>
      <h1>preservare e salvare stati</h1>
      <div
        className="d-grid d-grid-cols-3  m-3 w-90 gap-2"
        style={{ gridTemplateColumns: "auto auto auto" }}
      >
        <div className="border">
          <App />
        </div>
        <div className="border">
          <SameReset />
        </div>
        <div className="border">
          <ScoreBoard />
        </div>

        {/* esercizi */}
        <div className="border">
          <Es1 />
        </div>
        <div className="border">
          <Es2 />
        </div>
        {/* <div className="border" ><ScoreBoard/></div> */}
      </div>
    </>
  );
}
export function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div className=" rounded-3 d-flex flex-column">
      <div>
        <Counter />
        {showB ? <Counter /> : null}
      </div>
      <label className="form-check">
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => setShowB(e.target.checked)}
          className="form-check-input "
        ></input>
      </label>
    </div>
  );

  // const counter = <Counter/>
  // return(<div>
  //     {counter}
  //     {counter}
  // </div>)
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
  let className = "counter ";
  if (hover) {
    className += "hover ";
  }
  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <p>{score}</p>
      <button onClick={() => setScore(score + 1)} className="btn btn-primary">
        aumenta di 1
      </button>
    </div>
  );
}

//diffrent components at the same position reset state

export function SameReset() {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="w-25 m-5 border p-5 rounded-3 d-flex flex-column">
      {isPaused ? <p>ci vediamo dopo</p> : <Counter />}
      <label className="form-check">
        <input
          type="checkbox"
          checked={isPaused}
          onChange={(e) => setIsPaused(e.target.checked)}
          className="form-check-input "
        ></input>
      </label>
    </div>
  );

  // const counter = <Counter/>
  // return(<div>
  //     {counter}
  //     {counter}
  // </div>)
}

export function ScoreBoard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA && <Counter key="fulvio" person="fulvio" />}
      {!isPlayerA && <Counter key="Totti" person="Totti" />}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>next PLayer</button>
    </div>
  );
}

// Exercise 1 of 2: Fix disappearing input text
// This example shows a message when you press the button. However, pressing the button also accidentally resets the input. Why does this happen? Fix it so that pressing the button does not reset the input text.

export function Es1() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        Hide hint
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}

// Exercise 2 of 2:  Swap two form fields
// This form lets you enter first and last name. It also has a checkbox controlling which field goes first. When you tick the checkbox, the “Last name” field will appear before the “First name” field.
// It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox, the text will stay in the first input (which is now “Last name”). Fix it so that the input text also moves when you reverse the order.

export function Es2() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setName] = useState("");
  const [lastName, setLast] = useState("");

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field
          text={firstName}
          label="First name"
          onChange={(e) => setName(e.target.value)}
        />
        <Field
          text={lastName}
          label="Last name"
          onChange={(e) => setLast(e.target.value)}
        />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field
          text={lastName}
          label="Last name"
          onChange={(e) => setLast(e.target.value)}
        />
        <Field
          text={firstName}
          label="First name"
          onChange={(e) => setName(e.target.value)}
        />
        {checkbox}
      </>
    );
  }
}

function Field({ label, onChange, text }) {
  return (
    <label>
      {label}:{" "}
      <input type="text" value={text} placeholder={label} onChange={onChange} />
    </label>
  );
}



