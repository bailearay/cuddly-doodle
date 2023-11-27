import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="greet centered top">
        <h1>Hello</h1>
      </div>
      <div className="split right">
        <div className="info centered">
          <h2>Our Purpose</h2>
          <p>Connecting People to People</p>
        </div>
      </div>
      <div className=" split left">
        <div className="form centered">
          <h2>Already a member?</h2>
          <p>Sign in Here</p>
          <lable htmlFor="email">Your email address: </lable>
          <input type="email" className="email" id="email"></input>
          <br />
          <label htmlFor="pass">Your Password: </label>
          <input type="password" className="pass" id="pass"></input>
          <br />
          <button>Sign In</button>
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default App;
