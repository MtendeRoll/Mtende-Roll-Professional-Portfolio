import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <div>
          <Header />
          <main style={{ marginTop: "100px" }}>
            <Switch>
              <Route exact path={"/react-portfolio"}>
                <About />
              </Route>
              <Route exact path={"/about"}>
                <About />
              </Route>
              <Route exact path={"/portfolio"}>
                <Portfolio />
              </Route>
              <Route exact path={"/contact"}>
                <Contact />
              </Route>
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
