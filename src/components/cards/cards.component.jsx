import React from "react";
import "./card.styles.css";

export const Cards = ({ player }) => {
  const findDob = () => {
    let diff = new Date(Date.now() - new Date(player.birthday).getTime());
    return Math.abs(diff.getUTCFullYear() - 1970);
  };

  return (
    <div className="card">
      <img
        src={`https://avatars2.githubusercontent.com/u/${player.address.buildingNumber}?s=200`}
        alt={player.firstname}
        width="150"
      />
      <h4>
        {player.firstname} {player.lastname}
      </h4>
      <p>
        <strong>Email: </strong> {player.email}
      </p>
      <p>
        <strong>Phone: </strong> {player.phone}
      </p>
      <p>
        <strong>Address: </strong> {player.address.street}
        <strong> - </strong>
        {player.address.city}
      </p>
      <p>
        <strong>Country: </strong> {player.address.country}
      </p>
      <p>
        <strong>Age: </strong>
        {findDob()}
      </p>
    </div>
  );
};
