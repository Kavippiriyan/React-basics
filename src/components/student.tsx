// import React, { Component } from "react";

import { FormEvent, FunctionComponent, useEffect, useState } from "react"

// interface Studentstate {
//     name: string,
//     age: number

// }
// // type StudentProps =
// //     {
// //         fathername: string
// //         myclick: () => void
// //     }
// type StudentProps =
//     {
//         name: string,
//         age: number

//     }

// class Students extends Component<StudentProps, Studentstate> {


//     state: Readonly<Studentstate> =
//         {
//             name: "Kavippiriyan S",
//             age: 22
//         }
//     //     constructor(props: any) {
//     //         super(props)
//     //         this.state =
//     //         {
//     //             name: 'Kavippiriyan S',
//     //             age:20,

//     //         }
//     // }
//     // myclick = () => {
//     //     this.setState({
//     //         name: "Kavippiriyan Sundararaj"
//     //     })

//     // }

//     render(): JSX.Element {
//         const { name } = this.state
//         return (
//             <>
//                 <h1>Student of the Year: {this.state.name}</h1>
//                 {/* <button type="button" onClick={this.myclick}>Click</button> */}
//                 {/* <h1>{this.props.fathername}</h1> */}
//                 {/* <button type="button" onClick={this.props.myclick}>alertMsg</button> */}

//             </>)
//     }
// }
// export default Students


// import React, { Component, FormEvent } from "react";

// interface Studentstate {
//     name: string
// }

// class Students extends Component<{}, Studentstate> {


//     state: Readonly<Studentstate> =
//         {
//             name: "",

//         }

//     mychange = (e: FormEvent<HTMLInputElement>): void => {
//         this.setState(
//             {
//                 name: e.currentTarget.value
//             }
//         )
//     }
//     myclick = (): void => {
//         alert(this.state.name)
//     }
//     render(): JSX.Element {
//         return (
//             <>
//                 <input type="text" onChange={this.mychange} />
//                 <button onClick={this.myclick}>Submit</button>
//             </>)
//     }
// }
// export default Students



// import React, { Component, FC, FormEvent, useState } from "react";

// interface Studentstate {
//     name?: string
// }

// const Student: FC<Studentstate> = (props): JSX.Element => {

//     let myclick = () => {
//         setstudentname("Kavippiriyan Sundararaj")
//     }

//     const [studentname, setstudentname] = useState<string>("Kavippiriyan S")
//     return (
//         <div>
//             <h1>Welcome </h1>
//             <h1>{studentname}</h1>
//             <button onClick={myclick}>Click</button>
//         </div>
//     )
// }

// export default Student


// import React, { Component, FC, FormEvent, useState } from "react";

// interface Studentstate {
//     name?: string
//     age:number
// }

// const Student: FC<{}> = (props): JSX.Element => {

//     // let myclick = () => {
//     //     setstudentname([{name:"Kavippiriyan Sundararaj",age:22}])
//     // }
//     let myclick = () => {
//         setstudentname([...studentname,{name:"Kavippiriyan Sundararaj",age:22}])
//     }

//     const [studentname, setstudentname] = useState<Studentstate[]>([{name:"Kavippiriyan S",age:22}])
//     return (
//         <div>
//             <h1>Welcome </h1>
//             {/* <h1>{studentname[0].name}</h1> */}
//             {/* <h1>{JSON.stringify(studentname)}</h1> */}
//             {/* <h1>and Your age is {studentname[0].age}</h1> */}
//             {
//                 studentname.map(e=> <p>{e.name}</p>)
//             }
//             <button onClick={myclick}>Click</button>
//         </div>
//     )
// }

// export default Student


type StudentFetchDetails =
    {

        userId: number,
        id: number,
        title: string,
        completed: boolean

    }


const Student: FunctionComponent<{}> = (props): JSX.Element => {
    const [studentdetails, setstudentdetails] = useState<StudentFetchDetails>()
    const [studentid, setstudentid] = useState<number | string>(1)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${studentid}`)
            .then(response => response.json())
            .then((json: StudentFetchDetails) => setstudentdetails(json))
    }, [])

    const mychange = (e: FormEvent<HTMLInputElement>): void => {
        setstudentid(e.currentTarget.value)
    }
    const myclick = (): void => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${studentid}`)
            .then(response => response.json())
            .then((json: StudentFetchDetails) => setstudentdetails(json))
    }

    return (
        <>
            <input type="number" min="0" onChange={mychange} />
            <button onClick={myclick} >Click</button>
            <p>{JSON.stringify(studentdetails)}</p>
        </>
    )
}

export default Student