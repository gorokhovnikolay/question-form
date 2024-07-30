import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

export interface IValues {
  confirmPassword?: string;
  email?: string;
  gender?: string;
  name?: string;
  nikname?: string;
  password?: string;
}

function App() {
  const onSubmit = (values: IValues) => {
    console.log(values);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Signin onSubmit={onSubmit} />
        <Signup onSubmit={onSubmit} />
      </header>
    </div>
  );
}

export default App;
