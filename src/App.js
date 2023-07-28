import { Home } from "./home";
import { Archived } from "./archived";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home active={"#"} />} />
            <Route
              exact
              path="/archived"
              element={<Archived active={"#archive"} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
