 import FirstComp from "./FirstComp/FirstComp";
 import ImpExEs from "./ImpExp/ImpExpEs";
 import Avatar from "../Proprieta/Avatar";
    import JSON from '../Json';
    import InterpolationEs from "./InterpolationEs";
    import ListeEsercizi from "./ListeEsercizi";
import ComponentePuroEs from "./ComponentePuroEs";
import EventiEsercizi from "./EventiEsercizi"
import  ChildrenEs  from "./ChildrenEs";
import StatoEs from "./StatoEs"
import ConditionalRenderingEsercizi from "./ConditionalRenderingEsercizi"
import RenderEs from "./RenderEs"
 export default function EserciziMain() {
    return(<>
    <hr></hr>
    <h1>Render</h1>
    <RenderEs />
    <hr></hr>
    <h1>Stato</h1>
    <StatoEs /> 
    <hr></hr>
    <h1>FirstComp</h1>
    <FirstComp /> 
    <hr></hr>
    <h1>Esercizio ImpExp</h1>
    <ImpExEs />
    <hr></hr>
    <h1>InterpolationEs</h1>
    <InterpolationEs />
    <hr></hr>
    <h1>Children es</h1>
    <ChildrenEs />
    <hr></hr>
    <h1>Conditional Rendering</h1>
    <ConditionalRenderingEsercizi/>
    <hr></hr>
    <h1>liste di dati</h1>
    <ListeEsercizi/>
    <hr></hr>
    <h1>Componente Puro</h1>
    <ComponentePuroEs/>
    <hr></hr>
    <h1>Eventi</h1>
    <EventiEsercizi/>
    </>);
 }