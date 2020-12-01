import React from "react";
import Card from "./card";

const Content = (props) => {
  return (
    <div className="container-fluid d-flex flex-wrap justify-content-between mt-5">
      {props.content.map((item) => (
        <Card key={item.char_id} card={item}></Card>
      ))}
    </div>
  );
};

export default Content;
