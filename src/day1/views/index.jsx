import React from "react";
import Detail from "./Detail";
import Task from "./Task";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "Index页面传过来的",
      detailPage: ""
    };
  }

  changeIndex = content => {
    this.setState({
      content: content
    });
  };

  changeDetail = content => {
    this.setState({
      detailPage: content
    });
  };

  render() {
    let { content, detailPage } = this.state;
    console.log(content);
    return (
      <div>
        Index页面
        {content}
        <Detail changeIndex={this.changeIndex} detailPage={detailPage} />
        <Task changeDetail={this.changeDetail} />
      </div>
    );
  }
}

export default App;
