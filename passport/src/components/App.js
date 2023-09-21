import { Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./Edit/Edit";
import Screen from "./Screen/Screen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route Component={Screen} path="/" exact />
        <Route Component={Edit} path="/edit" exact />
      </Routes>
      {/* <Screen /> */}
      {/* <Edit /> */}
    </div>
  );
}

export default App;
