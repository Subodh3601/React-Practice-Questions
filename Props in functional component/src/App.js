// import "./styles.css";

// // Do not remove the export statement from Card Component.
// //Refactor the given Card component.
// export const Card = () => (
//   <div className="card">
//     <h3>Name: {name}</h3>
//     <span>About: {about}</span>
//   </div>
// );

// export default function App() {
//   return <Card name="Your Name." about="Your Message." />;
// }


import React from 'react'
import Card from './Card'

const App = () => {
  return (
    <div>
      <Card name="Subodh Singh" about="i am a full stack developer"/>
    </div>
  )
}

export default App