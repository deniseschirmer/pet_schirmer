import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BanhoTosa from "./pages/BanhoTosa";
import Layout from "./components/Layout";
import Consultorio from "./pages/Consultorio";
import Contato from "./pages/Contato";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Banhotosa">
          <BanhoTosa />
        </Route>
        <Route path="/Consultorio">
          <Consultorio />
        </Route>
        <Route path="/Contato">
          <Contato />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
