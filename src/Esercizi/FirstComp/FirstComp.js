export default function Main() {
  return (
    <section>
      <h1>es 1</h1>
      <Es1 />
      <h1>es 2</h1>
      <Es2 />
      <h1>es 3</h1>
      <Es3 />
      <h1>es 4</h1>
      <Es4 />
    </section>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}
function Es1() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}
function Es2() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}
function Es3(){
  return(
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}


function Es4() {
  return <section>
    <h1>My favorite scientists</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>;
}
