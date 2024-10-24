import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import { emailValidation, pwValidation } from "./validation.cjs";

function App() {

  // const emailRef = useRef()
  // const pwRef = useRef()
  const [email, setEmail] = useState("")
  const [pw, setPW] = useState("")
  const [firstStrike, setStrike] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    setStrike(true)
    const emailWarning = emailValidation(email)
    const pwWarning = pwValidation(pw)
    if (emailWarning.includes("Type") && pwWarning.includes("Type")) {
      console.log("email: ", email);
      console.log("password:", pw);
      setEmail("");
      setPW("");
      setStrike(false)
    }
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <h1 className="fs-3">Email</h1>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="passwordHelp" className="form-text">
            {firstStrike && emailValidation(email)}
          </div>
        </div>
        <div className="mb-3">
        <h1 className="fs-3">Password</h1>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pw}
            onChange={(e) => setPW(e.target.value)}
            // ref={pwRef}
          />
          <div id="passwordHelp" className="form-text">
            {firstStrike && pwValidation(pw)}
          </div>
        </div>
        <div className="d-grid gap-2">
          <button 
            className="btn btn-dark" 
            type="button"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
