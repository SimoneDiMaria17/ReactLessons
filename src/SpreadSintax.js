import utils from './Utils';

export function Avatar({person, size,isSepia,thikBorder}) {
  return(<>
    <img 
      className='avatar'
      src={utils.getImage(person,size)}
      alt='fulvios'
      width = {size}
      height = {size}
    />
  </>);
}

function Profile({person, size,isSepia,thikBorder}){
  return(<>
    <Avatar
    person = {{imageId: "7vQD0fP"}}
    size = {100}
    />
  </>)
}