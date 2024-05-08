

type HeadingProps = 
{
    children:string
}

export const Heading = (props:HeadingProps)=>
    {
        return <h1>{props.children}</h1>
    }

type ReactProps=
{
    children:React.ReactNode
}

export const Heading1 = (props:ReactProps)=>
    {
        return(
            <h2>{props.children}</h2>
        )
    }