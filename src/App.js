import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Home from "./screens/home/index.jsx";
import About from "./screens/about";
import Shop from "./screens/shop";
import Events from "./screens/events";
import Blog from "./screens/news";
import Contact from "./screens/contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/events" component={Events} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
