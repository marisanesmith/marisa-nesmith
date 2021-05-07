import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Photography from "./pages/Photography";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={["/", "/about", "/marisa-nesmith"]} component={Home}><Home /></Route>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact"><Contact /></Route> 
          <Route exact path="/photography"><Photography /> </Route>
        </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
