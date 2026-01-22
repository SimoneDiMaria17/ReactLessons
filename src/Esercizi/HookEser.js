import { useRef, useState } from "react";
export default function HookEs() {
  return (
    <div>
      <h2>Chat</h2>
      <Chat />
      <h2>togglwe</h2>
      <Toggle />
      <hr></hr>
      <Dashboard/>
      <hr></hr>
      <Chat2/>
      <h2>video player</h2>
      <VideoPlayer/>
      <h2>page</h2>
      <Page/>
    </div>
  );
}
// Exercise 1 of 4: Fix a broken chat input
// Type a message and click “Send”. You will notice there is a three second delay before you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. This “Undo” button is supposed to stop the “Sent!” message from appearing.
//  It does this by calling clearTimeout for the timeout ID saved during handleSend.
// However, even after “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and fix it.

export function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    
      timeoutID.current = setTimeout(() => {
        alert("Sent!");
        setIsSending(false);
      }, 3000);
    
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}

// Exercise 2 of 4: Fix a component failing to re-render
// This button is supposed to toggle between showing “On” and “Off”. However, it always shows “Off”. What is wrong with this code? Fix it.

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}


// Exercise 3 of 4: Fix debouncing 
// In this example, all button click handlers are “debounced”. To see what this means, press one of the buttons. Notice how the message appears a second later. If you press the button while waiting for the message, the timer will reset. So if you keep clicking the same button fast many times, the message won’t appear until a second after you stop clicking. Debouncing lets you delay some action until the user “stops doing things”.

// This example works, but not quite as intended. The buttons are not independent. To see the problem, click one of the buttons, and then immediately click another button. You’d expect that after a delay, you would see both button’s messages. But only the last button’s message shows up. The first button’s message gets lost.

// Why are the buttons interfering with each other? Find and fix the issue.




 function DebouncedButton({ onClick, children }) {
    let timeoutID = 0;
  return (
    <button onClick={() => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export  function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}

// Exercise 4 of 4: Read the latest state 
// In this example, after you press “Send”, there is a small delay before the message is shown. Type “hello”, press Send, and then quickly edit the input again. Despite your edits, the alert would still show “hello” (which was the value of state at the time the button was clicked).

// Usually, this behavior is what you want in an app. However, there may be occasional cases where you want some asynchronous code to read the latest version of some state. Can you think of a way to make the alert show the current input text rather than what it was at the time of the click?



export function Chat2() {
  const text = useRef(null)
  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + text.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text.current}
        onChange={e => text.current = e.target.value}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}




// Exercise 1 of 2: Play and pause the video 
// In this example, the button toggles a state variable to switch between a playing and a paused state. However, in order to actually play or pause the video, toggling state is not enough. You also need to call play() and pause() on the DOM element for the <video>. Add a ref to it, and make the button work.

export  function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  let videoRef= useRef(null);

  function handleClick() {
    if(!isPlaying){
        videoRef.current.play();
        const nextIsPlaying = !isPlaying;
         setIsPlaying(nextIsPlaying);
    }else{
        videoRef.current.pause();
        const nextIsPlaying = !isPlaying;
         setIsPlaying(nextIsPlaying);
    }
    
   
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" 
      ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

// For an extra challenge, keep the “Play” button in sync with whether the video is playing even if the user right-clicks the video and plays it using the built-in browser media controls. You might want to listen to onPlay and onPause on the video to do that.

// Exercise 2 of 2: Focus the search field 
// Make it so that clicking the “Search” button puts focus into the field.


export  function Page() {
    let inputRef= useRef(null)

    function focus(){
        inputRef.current.focus()
    }

  return (
    <>
      <nav>
        <button onClick={focus}>Search</button>
      </nav>
      <input
      ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
