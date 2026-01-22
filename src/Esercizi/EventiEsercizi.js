// Exercise 1 of 1: Fix an event handler 
// Clicking this button is supposed to switch the page background between white and black. However, nothing happens when you click it. Fix the problem. (Don’t worry about the logic inside handleClick—that part is fine.)


export default function LightSwitch() {
  function handleClick() {
    const ciccio = "https://i.pinimg.com/736x/06/3e/42/063e426fb1f1402d0aa06eb837a9bc9b.jpg";
    const joker = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MXPsJjCcPCvPaf4b6QsBm-grlLTCCXJkGQ&s";

    const bodyStyle = document.body.style;

    // Controllo se l'URL corrente include 'ciccio'
    if (bodyStyle.backgroundImage.includes(ciccio)) {
      bodyStyle.backgroundImage = `url(${joker})`;
    } else {
      bodyStyle.backgroundImage = `url(${ciccio})`;
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}


