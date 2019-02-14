import React from "react";
import RouteMap from "./map";
import Routes from "./routes";

class RouterView extends React.Component {
  render() {
    const { routes } = this.props;
    return <RouteMap routes={routes === undefined ? Routes : routes} />;
  }
}

export default RouterView;
