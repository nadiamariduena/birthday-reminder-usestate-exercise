import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((people) => {
        const { id, image, name, age } = people;
        return (
          <div key={id} className="containerList">
            <img className="img-box" src={people.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default List;
