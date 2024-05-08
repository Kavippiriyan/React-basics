import './App.css';
import { Greet } from './components/Greet'
import { Props } from './components/props'
// import { NameList } from './components/props'
import { GradeStatus } from './components/Status';
import { Heading1 } from './components/childrenprops';
import { Heading } from './components/childrenprops';
import { Button } from './components/Event';
import Students from './components/student'
import React, { Component} from 'react';

// function App() {

//   //   const  list = [
//   //     {
//   //       name:"kavi",age:22
//   //     },
//   //     {
//   //       name:"k7",age:22
//   //     }
//   //   ]

//   let myclick = ()=>
//     {
//       alert("Good Afternoon")
//     }

//   return (

//     <div className="App">
//       {/* <Greet />
//       {/* <Props name="Props" isCool  msg={"cool"} greet={{ welcome: "Hello", name: "Props" }} /> */}
//       {/* <NameList namelist={list}/> */}
//       {/* <GradeStatus status='GradeA'/> */}
//       {/* <Heading>Developer Thoughts!</Heading>
//       <Heading1>
//         <Heading>Tester Thoughts!</Heading>
//       // </Heading1> */}
//       {/* // <Button handleclick={(event,id) => { */}
//       {/* //   console.log("Button clicked",event,id); */}

//       {/* // } */}
//       {/* } /> */}

//     <Students fathername='Kavippiriyan son of Sundararaj' myclick={myclick}/>
//     </div>
//   );
// }


// type Studentstate =
//   {
//     name: string
//     age: number
//   }

// type StudentsReport =
//   {
//     studentReport: Studentstate[]
//   }


// class App extends React.Component<{}, StudentsReport> {

//   state: Readonly<StudentsReport> =
//     {
//       studentReport: [{ name: "Kavippirian S", age: 22 }, { name: "Mathumika S", age: 23 }]
//     }



//   render() {

//     return(
//     // <Students fathername='Kavippiriyan son of Sundararaj' myclick={this.myclick} />
//     <Students name={this.state.studentReport[0].name} age={this.state.studentReport[0].age} />)
//   };
// }

// export default App;


type Studentstate =
  {
    name: string
    age: number
  }

type StudentsReport =
  {
    studentReport: Studentstate[]
  }


class App extends React.Component<{}, StudentsReport> {


  render() {

    return(
    // <Students fathername='Kavippiriyan son of Sundararaj' myclick={this.myclick} />
    <Students  />
  )
  };
}

export default App;
