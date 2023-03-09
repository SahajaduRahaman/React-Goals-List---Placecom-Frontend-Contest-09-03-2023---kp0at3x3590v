import React from "react";

const ListOfGoals = ({ allGoals }) => {
    return (
      <ul>
        {allGoals.map((item, index) => (
          <li key={index}>
              <p>My goal is to {item.goal}, by {item.by}.</p>
          </li>
        ))}
      </ul>
    );
}

export default ListOfGoals;