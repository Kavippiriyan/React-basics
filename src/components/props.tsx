
type nameprops = {
    name: string
    msg: string
    isCool?:boolean
    greet:{welcome:string,name:string}
}

export const Props = (props: nameprops) => {
    const {isCool=true} = props
    return (
        <div>
            <h1>Iam {props.name}</h1>
            <h2>{props.isCool ?`Okey! It's Pretty ${props.msg}`:`that's okey`} </h2>
            <h3>{props.greet.welcome} {props.greet.name}</h3>
        </div>
    )
}

// type nameprops = {
//     namelist:
//     {
//         name: string, age: number
//     }[]
// }



// export const NameList = (props: nameprops) => {

//     return(
//     <div>

//         {props.namelist.map(details => {
//             return (
//                 <h2>{details.name} age is {details.age}</h2>
//             )
//         }
//         )}

//     </div>
//     )
// }