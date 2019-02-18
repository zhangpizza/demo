import React from "react";

class Detail extends React.Component {
  render() {
    let { changeIndex, detailPage } = this.props;
    return (
      <div>
        Detail页面
        {detailPage}
        <button
          onClick={() => {
            changeIndex("aaaa");
          }}
        >
          传值给Index
        </button>
      </div>
    );
  }
}

export default Detail;
