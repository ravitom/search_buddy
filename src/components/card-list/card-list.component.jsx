import React from "react";
import "./card-list.styles.css";
import { Cards } from "../cards/cards.component";

export const CardList = (props) => (
  <div className="container">
    {props.players.map((player) => (
      <Cards key={player.phone} player={player}></Cards>
    ))}
  </div>
);
