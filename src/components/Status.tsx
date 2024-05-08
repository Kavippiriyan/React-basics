type Status = 
{
    status:'GradeA'|'GradeB'|'GradeC'
}


export const GradeStatus = (props:Status)=>
    {
        let status
        if(props.status=="GradeA")
            {
                status = "GradeA"
            }
        else if (props.status=="GradeB")
        {
            status = "GradeB"
        }
        else if (props.status=="GradeC")
        {
            status = "GradeC"
        }

        return(
            <h2>Your Got - {status}</h2>
        )
    }