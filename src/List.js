import React from "react";

const List = ({ people }) => {
  return (
    <section className="listWrapper">
      {people.map((people) => {
        const { id, image, name, age } = people;
        return (
          <article key={id} className="containerList">
            <img src={image} alt={name} />
            <div className="blockText">
              <h1>{name}</h1>
              <h5>{age}</h5>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
