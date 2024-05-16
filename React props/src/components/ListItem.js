import React, { Component } from "react";

// Complete this Component
const ListItem = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
        className="ListItem"
        style={{
          height:"30",
          backgroundColor:item.bgColor
        }}
      >
        <img src={item.icon} alt={item.name} />
        <a href={item.link}></a>
      </div>
    ))}
    </>


  );
};

export default ListItem;
