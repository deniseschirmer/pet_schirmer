import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Banhoetosa from "./pages/Banhoetosa";
import Consultorio from "./pages/consultorio";
import Contato from "./pages/Contato";
// import Footer from "./components/Footer";

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
        <Route path="/Banhoetosa">
          <Banhoetosa />
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
