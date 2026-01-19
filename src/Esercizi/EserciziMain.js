 import FirstComp from "./FirstComp/FirstComp";
 import ImpExEs from "./ImpExp/ImpExpEs";
 import Avatar from "../Proprieta/Avatar";
    import JSON from '../Json';
    import InterpolationEs from "./InterpolationEs";
    import ListeEsercizi from "./ListeEsercizi"
import  ChildrenEs  from "./ChildrenEs";
import ConditionalRenderingEsercizi from "./ConditionalRenderingEsercizi"
 export default function EserciziMain() {
    return(<>
    <h1>FirstComp</h1>
    <FirstComp /> 
    <h1>Esercizio ImpExp</h1>
    <ImpExEs />
    <h1>InterpolationEs</h1>
    <InterpolationEs />
    <h1>Children es</h1>
    <ChildrenEs />
    <h1>Conditional Rendering</h1>
    <ConditionalRenderingEsercizi/>
    <h1>liste di dati</h1>
    <ListeEsercizi/>
    </>);
 }