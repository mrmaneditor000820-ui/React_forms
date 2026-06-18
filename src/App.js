// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   function handlechange (e){
//    setName(e.target.value)
//   }

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={handlechange}
//       />

//       <h2>{name}</h2>
//     </>
//   );
// }
// export default App


// React me form inputs ko usually state se control kiya jata hai.

// import React from 'react'

// const handleSubmit = (e) => {
//   e.preventDefault();

//   console.log("Form Submitted");
// };


// function App() {
//   return (
//     <div><form onSubmit={handleSubmit}>
//   <button>Submit</button>
// </form></div>
//   )
// }

// export default App


// React me form submit karte waqt page refresh hota hai

// is liye hum preventDefault laga te hain take page refresh na ho or form submit ho jay 

// preventDefault()

// Browser ka default behavior (page refresh) rok deta hai.

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
}

export default App