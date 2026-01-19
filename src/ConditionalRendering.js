function Item({name,isPacked}){
    return(
        <li>
           {name} {isPacked? ("v"):(null)} {/*se è stato spedito stampo niente se no stampo il nome*/}
        </li>
    );
}
export default function PackingList(){
    return(
        <section>
            <ul>
                <Item name="Space suit" isPacked={true}/>
                 <Item name="Space suit" isPacked={true}/>
                  <Item name="Space suit" isPacked={false}/>
            </ul>
        </section>
    )
}

