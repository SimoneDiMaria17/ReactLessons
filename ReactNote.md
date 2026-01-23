[drive](https://drive.google.com/drive/folders/1SWmGOzy1QD2d36PYiFGpjIFcv40VPqO_)
1.scaricare node [qui](https://nodejs.org/en/download)

- Per Creare il progetto si usa il comando **npx create-react-app nome**
- Se mancano installare i node modules **npm install**
- Per Avviare il programma si usa il comando **npm start**

React si basa su javascript  ed è una libreria non un framework.

#File
package-json
    contiente tutte le dipendenze del progetto, questo è utile perchè non ti devi salvare i node modules e basta che condividi il file senza, poi con il comando npm install li riscarichi
package-lock
    le versioni delle dipendenze che vengono usate
    
App.js
    component di js, ritorna come output un jsx
index.html 
    dove c'è il div route viene eseguito l'index.js 
index.js++ 
    <App /> è il tag che richiama il component App.js



Componenti
il nome deve essere sempre maiuscolo -> guardare App.js


export default function Profile(){
  return( //dico che può renderizzare righe multiple
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  ); 
}

bisogna esportare il component con  export, il default può essere usato solo su un component e determina il primo che viene esportato su quel file, quando poi lo importi con import nome from 'path', lo usi con <nome/>

Regole JSX, unione tra html e js rendendo tutto più dinamico, bisogna chiudere tutti i tag html, deve ritornare un div fo un elemento che raggruppa gli altri, se non voglio usare dei div,span,nav,section si può usare <>. 
Si usa il fragment se voglio usare una key.

per usare una class di stile si usa ClassName, se voglio usare elementi js come variabili costanti e chiamare funzioni posso farlo attraverso le parentesi graffe, vedere File Avatar.js, con le doppie graffe si usano per il css e gli oggetti.

ogni component ha delle proprietà, per esempio i parametri

spread sintax -> serve per inoltrare le proprietà usando jsx, se usi come parametro {children} fai riferimento a tutti i component passati all'interno di esso


conditional rendering -> permette di visualizzare in maniera condizionale dei componenti


la strictmode nel rendere fa si che i component vengano chiamati 2 volte perchè si assicura la loro purezza

Per accedere ad una lista di oggetti

style
gli stili globali si inseriscono in Index.css poi ogni component ha i suoi stili singoli.






Eventi


stato-> quando le informazioni vanno ricordate e lo stato persiste -> hook
differenza con le proprietà
updater function
--------------------
React.js: Props vs State

1. Props (Proprietà)

Sono valori passati ai componenti dal componente genitore.

Sono immutabili: il componente figlio non può modificarle.

Vengono usate per configurare il componente o per passare dati.

Sintassi tipica:

function Saluto(props) {
  return <h1>Ciao, {props.nome}!</h1>;
}


Uso: <Saluto nome="Luca" />

2. State (Stato)

È un insieme di dati locali al componente che possono cambiare nel tempo.

È mutabile tramite la funzione setState (nei componenti a classe) o useState (nei componenti funzionali).

Serve a gestire l’interattività e aggiornare il rendering quando cambia.

Esempio con hook useState:

import { useState } from 'react';

function Contatore() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount(count + 1)}>Clicca</button>
    </div>
  );
}


In breve:

Props → dati immutabili ricevuti dall’esterno.

State → dati mutabili locali al componente.


DeepCopy:
  Gestione di uno stato complesso tipo un oggetto, setPosition({
    x:valore,
    y:valore
  }) -> per modificare i valori

  esempio di un form
  setPerson({
    ..Person -> estrae gli attributi con i valori già presenti e li reinserisce nel nuovo set -> spread syntax
    firstName : nuovo valore
  }), centralizzare questa roba 

  function a(e){
    ...person
    [e.target.name] : e.target.value -> uso le quadre per definire che non è un parametro dell'oggetto, so quello che devo cambiare dal target.name
  }


  2-way binding

  con oggetti dentro oggetti
  a{
    name:'a',
    b:{
      c:''
      d;:''
    }
  }

  setPerson({
    ...person,
    artwork:{
      ...person.artwork
      title:'';
    }
  })


  libreria Immer
  la libreria immer ti facilita i passaggi sopra
  updateperson(draft=>{ -> draft è già una copia di quell'oggetto
    draft.name = e.target.value;
  })

  stessa cosa ma con array:
  evitare metodi che mutano direttamente l'array
  let list =[{

  }]

si può usare anche qua la libreria immer-> update(draft=>{
  const artvowrk = draft.find(a=>a.id===id)
  modifica
})

  Updating Arrays in State

		avoid (mutates the array)	prefer (returns a new array)
adding		push, unshift			concat, [...arr] spread syntax

removing 	pop, shift, splice		filter, slice 

replacing 	splice, arr[i] = ... assignment map 

sorting		reverse, sort			copy the array first 



strutturare lo stato, LE REgole, 
1- raggruppare assieme gli elementi di uno stesso gruppo, esempio form ha un oggetto con il nome,cognome..
2-evitare la ridondanza
3-evitare le contraddizioni
4- evitare i duplicati
5-evitare stati troppo complessi con tanti innesti

Condiviere los tato-> usare l'idioma, spostare lo stato dal figlio al genitore



altri metodi hook
useRef -> risolve il problema del componente puro, quindi può usare variabili globali, se essa viene modificata non viene ricarita la pagina, anche elementi del dom
useEffect -> 




quando bootstrap modifica lo stato preservandolo o modificandolo
lo modifica oltre che ai casi estremi come il refresh anche quando camìmbia posiziona nel dom