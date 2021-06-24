import "./App.css";
import Home from "./pages/home";
import Header from "./component/header";
import { Route, Switch } from "react-router-dom";
import List from "./pages/list";
import Edit from "./pages/listEdit";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/list" exact component={List} />
        <Route path="/list/:id" exact component={Edit} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
