import { getImage } from "./Utils"

// introducing properties: way to send parameters to component
function Avatar({person, size}){
	return (
		<img 
			className="avatar"
			src={getImage(person)}
			alt="fulvios"
			width={size}
			height={size}
		/>
	)
}

// export function Profile({person, size, isSepia=false, thickBorder=false}){
// 	return (
// 		<Avatar 
// 			person={person}
// 			size={100}
// 			isSepia={isSepia}
// 			thickBorder={thickBorder}
// 		/>
// 	)
// }

/* export function Profile({props}){
	return (
		<div className="card">
		<Avatar 
			{...props}
		/>
		</div>
	)
} */

export default function App(){
	return (
		<Profile 
			size={100}
			person={{
				name:"giovanni",
				imageId:"YfeOqp2"
			}}
		/>
	)
}

function Card({children}) {
	return (
		<div className="card">
			{children}	{/* si riferisce la figlio*/}
		</div>
	)
}

export function Profile({person, size, isSepia=false, thickBorder=false}){
	return (
		<Card>
			{/* <Avatar
				person={{
					name: "giovanni",
					imageId: "YfeOqp2"
				}}
				size={100}
			/> */}
            <h1>{person.name}'s Profile</h1>
		</Card>
	)
}