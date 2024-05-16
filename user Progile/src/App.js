// import "./styles.css";
// import { Component } from "react";
// // Use Hero, Skills and About component to display your information
// class App extends Component {
//   render() {
//     return (
//       <>
//       {/* render your component here  */}
//       </>

//     )}
// }
// export default App

import React from 'react'
import './styles.css'
import Hero from './Hero'
import Skills from './Skills'
import About from './About'


const App = () => {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <About/>
    </div>
  )
}

export default App