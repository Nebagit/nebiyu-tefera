import React from "react";
import "./styles.scss";

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2 className="page-header">{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
