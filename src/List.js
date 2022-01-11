import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((people) => {
        const { id, image, name, age } = people;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h1>{name}</h1>
              <h5>{age}</h5>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
