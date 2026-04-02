// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "./firebase";
// import { auth } from "../../firebase";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       alert("Login Successful");
//       console.log(user);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Film Atlas Login </h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };
// export default Login;

import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Login Successful");
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Film Atlas Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br /><br />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;