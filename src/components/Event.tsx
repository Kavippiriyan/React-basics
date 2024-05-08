
// type ButtonProps =
//     {
//         handleclick: () => void
//     }

// export const Button = (props: ButtonProps) => {
//     return (
//         <button onClick={props.handleclick}>Click</button>
//     )
// }


type ButtonProps =
    {
        handleclick: (event:React.MouseEvent<HTMLElement> ,id:number) => void
    }

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event)=>props.handleclick(event,1)}>Click</button>
    )
}