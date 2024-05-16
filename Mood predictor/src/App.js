// import React from "react";
// import "./styles.css";

// const MOODS = [
//   "happy",
//   "sad",
//   "angry",
//   "excited",
//   "fearful",
//   "disgusted",
//   "surprised"
// ];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       prediction: ""
//     };
//   }

//   handleClick() {
//     const moodIndex = Math.floor(Math.random() * MOODS.length);
//     this.setState({ prediction: MOODS[moodIndex] });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Mood Predictor</h1>
//         {this.state.prediction && (
//           <p>
//             Mood predictor has predicted that you mood will be
//             <b> {this.state.prediction} </b>today.
//           </p>
//         )}
//         <button onClick={this.handleClick}>Predict Mood</button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react'
import "./styles.css";

const App = () => {
  const [mood, setMood] = useState("")
  
  const MOODS = [
    "happy",
    "sad",
    "angry",
    "excited",
    "fearful",
    "disgusted",
    "surprised"
  ];

  const handleClick = () => {
    const index = Math.floor(Math.random() * MOODS.length)
    setMood(MOODS[index])

  }
  return (
    <div>
      <h1>Mood Predictor</h1>
      {mood && <p>Mood Predictor has predicted that your mood will be <b style={{ fontSize: "2rem" }}>{mood}</b> today.</p>
}
      <button type='button' onClick={handleClick}>Predict Mood</button>
    </div>
  )
}

export default App