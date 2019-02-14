import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "router/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <RouterView />
      </Router>
    );
  }
}

export default App;
