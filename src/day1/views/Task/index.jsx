import React from "react";

class Task extends React.Component {
  render() {
    let { changeDetail } = this.props;
    return (
      <div>
        task页面
        <button
          onClick={() => {
            changeDetail("改变了detail");
          }}
        >
          传递给detail
        </button>
      </div>
    );
  }
}

export default Task;
